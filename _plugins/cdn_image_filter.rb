require 'cgi'

module Jekyll
  module CDNImageFilter
    # List of domains that support OSS processing
    CDN_DOMAINS = [
      'cdn.fliggy.com',
      'gw.alipayobjects.com',
      'gw.alicdn.com',
      'img.alicdn.com'
    ]
    RESPONSIVE_WIDTHS = [640, 768, 960].freeze
    RESPONSIVE_SIZES = '(max-width: 600px) calc(100vw - 32px), 900px'.freeze

    # Helper to append OSS params to a URL
    def self.append_oss_params(url)
      return url if url.nil? || url.empty?

      # Skip if already processed or is an SVG/GIF
      return url if url.include?('x-oss-process')
      return url if url =~ /\.(svg|gif)$/i

      # Check if domain matches
      domain_match = CDN_DOMAINS.any? { |domain| url.include?(domain) }
      return url unless domain_match

      separator = url.include?('?') ? '&' : '?'
      # Using w_2000 to match weekly project implementation for high-res screens
      "#{url}#{separator}x-oss-process=image/auto-orient,1/resize,w_2000/format,webp"
    end

    def self.local_relative_path(url)
      return nil if url.nil? || url.empty?

      clean_url = url.split('?').first.to_s.split('#').first.to_s
      return nil unless clean_url.start_with?('/')

      CGI.unescape(clean_url.sub(%r{\A/}, ''))
    end

    def self.srcset_candidates(site, src, original_width)
      relative_path = local_relative_path(src)
      return [] if relative_path.nil? || relative_path.empty?

      source_path = File.join(site.source, relative_path)
      return [] unless File.file?(source_path)

      ext = File.extname(relative_path)
      base = File.basename(relative_path, ext)
      dir = File.dirname(relative_path)
      candidates = []

      RESPONSIVE_WIDTHS.each do |width|
        variant_relative = File.join(dir, "#{base}-#{width}w#{ext}")
        variant_path = File.join(site.source, variant_relative)
        next unless File.file?(variant_path)

        candidates << ["/#{variant_relative}", width]
      end

      if original_width && original_width.positive?
        candidates << ["/#{relative_path}", original_width]
      end

      candidates
        .sort_by { |entry| entry[1] }
        .uniq { |entry| entry[0] }
    end

    def self.apply_responsive_attrs(site, img_tag, src)
      return img_tag if img_tag =~ /\ssrcset=/i

      width_match = img_tag.match(/\swidth=(['"])(\d+)\1/i)
      original_width = width_match ? width_match[2].to_i : nil
      candidates = srcset_candidates(site, src, original_width)
      return img_tag if candidates.empty?

      srcset = candidates.map { |entry| "#{entry[0]} #{entry[1]}w" }.join(', ')
      updated_tag = img_tag.sub('<img', "<img srcset=\"#{srcset}\"")

      unless updated_tag =~ /\ssizes=/i
        updated_tag = updated_tag.sub('<img', "<img sizes=\"#{RESPONSIVE_SIZES}\"")
      end

      updated_tag
    end

    # Filter for processing HTML content (<img> tags)
    def cdn_image_filter(input)
      return input if input.nil? || input.empty?

      site = @context.registers[:site]
      first_image = true
      input.gsub(/<img\s+[^>]*src="([^"]+)"[^>]*>/) do |img_tag|
        src = $1
        new_src = CDNImageFilter.append_oss_params(src)
        updated_tag = src != new_src ? img_tag.sub(src, new_src) : img_tag
        updated_tag = CDNImageFilter.apply_responsive_attrs(site, updated_tag, src) if site

        unless updated_tag =~ /\sdecoding=/i
          updated_tag = updated_tag.sub('<img', '<img decoding="async"')
        end

        if first_image
          if updated_tag =~ /\sloading=/i
            updated_tag = updated_tag.gsub(/\sloading=(['"]).*?\1/i, ' loading="eager"')
          else
            updated_tag = updated_tag.sub('<img', '<img loading="eager"')
          end

          unless updated_tag =~ /\sfetchpriority=/i
            updated_tag = updated_tag.sub('<img', '<img fetchpriority="high"')
          end
          first_image = false
        elsif updated_tag !~ /\sloading=/i
          updated_tag = updated_tag.sub('<img', '<img loading="lazy"')
        end

        updated_tag
      end
    end

    # Filter for processing raw URLs (e.g. page.feature)
    def cdn_image_url(input)
      CDNImageFilter.append_oss_params(input)
    end

    def first_image_src(input)
      return '' if input.nil? || input.empty?

      match = input.match(/<img\s+[^>]*src=(['"])([^'"]+)\1/i)
      match ? match[2] : ''
    end
  end
end

Liquid::Template.register_filter(Jekyll::CDNImageFilter)
