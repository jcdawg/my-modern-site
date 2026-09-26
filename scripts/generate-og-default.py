#!/usr/bin/env python3
"""Generate public/og-default.png (1200x630), the site-wide default share image.

Plain, brand-matched to public/og/programs.png: navy background, white
headline, blue accent rule, short tagline.

Usage: python3 scripts/generate-og-default.py [path/to/Geist-VariableFont_wght.ttf]
Requires Pillow. Geist is the site font (next/font/google); any bold sans works.
"""
import sys
from PIL import Image, ImageDraw, ImageFont

W, H = 1200, 630
NAVY = (2, 6, 23)        # --navy-950
BLUE = (37, 99, 235)     # --blue-accent
WHITE = (255, 255, 255)
GREY = (203, 213, 225)

font_path = sys.argv[1] if len(sys.argv) > 1 else "Geist-VariableFont_wght.ttf"


def font(size, weight):
    f = ImageFont.truetype(font_path, size)
    try:
        f.set_variation_by_name(weight)
    except Exception:
        pass
    return f


img = Image.new("RGB", (W, H), NAVY)
d = ImageDraw.Draw(img)

# Subtle dot grid, like the site's hero sections
for x in range(0, W, 24):
    for y in range(0, H, 24):
        d.point((x, y), fill=(15, 23, 42))

left = 90
d.text((left, 170), "The Kas Group", font=font(120, "Bold"), fill=WHITE)
d.rectangle((left, 330, left + 360, 336), fill=BLUE)
d.text((left, 370), "Sales and GTM recruiting for startups", font=font(46, "Medium"), fill=GREY)
d.text((left, 530), "THEKASGROUP.COM", font=font(26, "Medium"), fill=BLUE)

img.save("public/og-default.png", optimize=True)
print("Wrote public/og-default.png", img.size)
