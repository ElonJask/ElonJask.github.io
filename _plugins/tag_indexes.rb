module Jekyll
  class TagIndexesGenerator < Generator
    priority :low

    def generate(site)
      site.config["posts_tags"] = build_index(site.collections["posts"]&.docs || [])
      site.config["posts_en_tags"] = build_index(site.collections["posts_en"]&.docs || [])
    end

    private

    def build_index(docs)
      grouped = Hash.new { |hash, key| hash[key] = [] }

      docs.each do |doc|
        tags = Array(doc.data["tags"]).map { |tag| tag.to_s.strip }.reject(&:empty?)
        tags.each { |tag| grouped[tag] << doc }
      end

      grouped.each_value do |items|
        items.sort_by! { |doc| doc.date || Time.at(0) }
        items.reverse!
      end

      grouped.sort_by { |tag, _| tag.downcase }.to_h
    end
  end
end
