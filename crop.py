import sys
from PIL import Image

try:
    img_path = r"C:\Users\megha\.gemini\antigravity-ide\brain\62c7e69a-ea90-402d-9acf-5c70c10f60de\.user_uploaded\media_1787245879858.png"
    img = Image.open(img_path)
    width, height = img.size
    print(f"Image size: {width}x{height}")
    
    # Let's crop based on percentages assuming it's centered
    # Card is roughly in the bottom half. 
    # Left logo: x=15% to 35%, y=50% to 80%
    # Right logo: x=65% to 85%, y=50% to 80%
    
    clip_box = (int(width * 0.1), int(height * 0.45), int(width * 0.4), int(height * 0.95))
    minora_box = (int(width * 0.6), int(height * 0.45), int(width * 0.9), int(height * 0.95))
    
    clip_img = img.crop(clip_box)
    minora_img = img.crop(minora_box)
    
    clip_img.save(r"c:\Users\megha\MAVROS\mavrostech\public\assets\clip-n-copy-logo.png")
    minora_img.save(r"c:\Users\megha\MAVROS\mavrostech\public\assets\minora-logo.png")
    print("Cropped and saved to public/assets/")
except Exception as e:
    print(f"Error: {e}")
