#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT_DIR"

if ! command -v magick >/dev/null 2>&1; then
  echo "magick command not found. Please install ImageMagick first."
  exit 1
fi

generated=0
skipped=0

while IFS= read -r -d '' src; do
  width="$(magick identify -format "%w" "$src")"
  ext=".${src##*.}"
  base="${src%$ext}"

  for target in 640 768 960; do
    if [ "$width" -le "$target" ]; then
      skipped=$((skipped + 1))
      continue
    fi

    out="${base}-${target}w${ext}"
    if [ -f "$out" ] && [ "$out" -nt "$src" ]; then
      skipped=$((skipped + 1))
      continue
    fi

    magick "$src" -resize "${target}x" -strip -quality 82 "$out"
    generated=$((generated + 1))
  done
done < <(find images/posts -type f \( -name "*.webp" -o -name "*.jpg" -o -name "*.jpeg" -o -name "*.png" \) ! -name "*-640w.*" ! -name "*-768w.*" ! -name "*-960w.*" -print0)

echo "Responsive variants generated: $generated"
echo "Skipped: $skipped"
