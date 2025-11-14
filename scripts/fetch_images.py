"""
Script to fetch fighter jet images from Wikipedia and convert them to silhouettes.
Requires: pip install requests pillow beautifulsoup4
"""

import requests
from bs4 import BeautifulSoup
import os
from PIL import Image, ImageOps

# Fighter jet Wikipedia page mappings
JET_PAGES = {
    "f-15": "McDonnell_Douglas_F-15_Eagle",
    "f-16": "General_Dynamics_F-16_Fighting_Falcon",
    "f-14": "Grumman_F-14_Tomcat",
    "f-18": "McDonnell_Douglas_F/A-18_Hornet",
    "a-10": "Fairchild_Republic_A-10_Thunderbolt_II",
    "f-18e": "Boeing_F/A-18E_F_Super_Hornet",
    "f-15e": "McDonnell_Douglas_F-15E_Strike_Eagle",
    "f-15ex": "Boeing_F-15EX_Eagle_II",
    "f-22": "Lockheed_Martin_F-22_Raptor",
    "f-35a": "Lockheed_Martin_F-35_Lightning_II",
    "f-35b": "Lockheed_Martin_F-35_Lightning_II",
    "f-35c": "Lockheed_Martin_F-35_Lightning_II",
    "typhoon": "Eurofighter_Typhoon",
    "tornado": "Panavia_Tornado",
    "harrier": "Hawker_Siddeley_Harrier",
    "rafale": "Dassault_Rafale",
    "mirage-2000": "Dassault_Mirage_2000",
    "mirage-f1": "Dassault_Mirage_F1",
    "gripen": "Saab_JAS_39_Gripen",
    "viggen": "Saab_37_Viggen",
    "jas-39": "Saab_JAS_39_Gripen",
    "su-27": "Sukhoi_Su-27",
    "su-30": "Sukhoi_Su-30",
    "su-33": "Sukhoi_Su-33",
    "su-35": "Sukhoi_Su-35",
    "su-57": "Sukhoi_Su-57",
    "mig-29": "Mikoyan_MiG-29",
    "mig-31": "Mikoyan_MiG-31",
    "mig-35": "Mikoyan_MiG-35",
    "j-10": "Chengdu_J-10",
    "j-11": "Shenyang_J-11",
    "j-15": "Shenyang_J-15",
    "j-16": "Shenyang_J-16",
    "j-20": "Chengdu_J-20",
    "j-31": "Shenyang_FC-31",
}


def get_wikipedia_image_url(page_title):
    """Get the main image URL from a Wikipedia page."""
    try:
        url = f"https://en.wikipedia.org/wiki/{page_title}"
        headers = {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
        }
        response = requests.get(url, timeout=10, headers=headers)
        soup = BeautifulSoup(response.content, "html.parser")

        # Strategy 1: Find the infobox image
        infobox = soup.find("table", class_="infobox")
        if infobox:
            img_tag = infobox.find("img")
            if img_tag:
                img_src = img_tag.get("src") or img_tag.get("data-src")
                if img_src:
                    if img_src.startswith("//"):
                        img_src = "https:" + img_src
                    elif img_src.startswith("/"):
                        img_src = "https://en.wikipedia.org" + img_src
                    # Convert thumbnail to full size
                    if "/thumb/" in img_src:
                        img_src = img_src.replace("/thumb/", "/").rsplit("/", 1)[0]
                    return img_src

        # Strategy 2: Find any image in the infobox (more flexible)
        if infobox:
            for img in infobox.find_all("img"):
                src = img.get("src") or img.get("data-src")
                if src and "thumb" in src:
                    if src.startswith("//"):
                        src = "https:" + src
                    elif src.startswith("/"):
                        src = "https://en.wikipedia.org" + src
                    # Convert thumbnail to full size
                    src = src.replace("/thumb/", "/").rsplit("/", 1)[0]
                    return src

        # Strategy 3: Find first large thumbnail image on the page
        for img in soup.find_all("img"):
            src = img.get("src") or img.get("data-src")
            if src and "thumb" in src:
                # Skip small icons and logos
                if any(
                    skip in src.lower() for skip in ["icon", "logo", "flag", "emblem"]
                ):
                    continue
                if src.startswith("//"):
                    src = "https:" + src
                elif src.startswith("/"):
                    src = "https://en.wikipedia.org" + src
                # Convert thumbnail to full size
                src = src.replace("/thumb/", "/").rsplit("/", 1)[0]
                return src
    except Exception as e:
        print(f"Error fetching {page_title}: {e}")
    return None


def download_image(url, filepath):
    """Download an image from a URL."""
    try:
        headers = {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
        }
        response = requests.get(
            url, timeout=15, stream=True, headers=headers, allow_redirects=True
        )
        if response.status_code == 200:
            # Check if it's actually an image
            content_type = response.headers.get("content-type", "")
            if "image" not in content_type.lower():
                print(f"  Warning: URL doesn't appear to be an image: {content_type}")
            with open(filepath, "wb") as f:
                for chunk in response.iter_content(1024):
                    f.write(chunk)
            return True
        else:
            print(f"  HTTP {response.status_code} for {url[:80]}...")
    except Exception as e:
        print(f"  Error downloading: {str(e)[:100]}")
    return False


def convert_to_silhouette(input_path, output_path):
    """Convert an image to a silhouette."""
    try:
        img = Image.open(input_path)

        # Convert to grayscale
        if img.mode != "L":
            img = img.convert("L")

        # Apply threshold to create black and white
        threshold = 128
        img = img.point(lambda p: 255 if p > threshold else 0, mode="1")

        # Convert back to grayscale and invert
        img = img.convert("L")
        img = ImageOps.invert(img)

        # Resize to standard size (maintaining aspect ratio)
        img.thumbnail((800, 400), Image.Resampling.LANCZOS)

        # Create a new image with transparent background
        output = Image.new("RGBA", (800, 400), (0, 0, 0, 0))

        # Paste the silhouette centered
        x = (800 - img.width) // 2
        y = (400 - img.height) // 2
        output.paste(img, (x, y))

        # Convert white to a specific color (or keep white)
        pixels = output.load()
        for i in range(output.width):
            for j in range(output.height):
                r, g, b, a = pixels[i, j]
                if r > 200:  # White pixels
                    pixels[i, j] = (255, 255, 255, 255)

        output.save(output_path, "PNG")
        return True
    except Exception as e:
        print(f"Error converting {input_path}: {e}")
        return False


def main():
    output_dir = os.path.join(os.path.dirname(__file__), "..", "public", "jets")
    original_dir = os.path.join(output_dir, "original")

    os.makedirs(original_dir, exist_ok=True)
    os.makedirs(output_dir, exist_ok=True)

    print("Fetching fighter jet images from Wikipedia...\n")

    for jet_id, page_title in JET_PAGES.items():
        original_path = os.path.join(original_dir, f"{jet_id}.jpg")
        silhouette_path = os.path.join(output_dir, f"{jet_id}.png")

        # Skip if silhouette already exists
        if os.path.exists(silhouette_path):
            print(f"[SKIP] Already exists: {jet_id}")
            continue

        # Download original if needed
        if not os.path.exists(original_path):
            print(f"Downloading {jet_id}...")
            img_url = get_wikipedia_image_url(page_title)
            if img_url:
                print(f"  Found URL: {img_url[:80]}...")
                if download_image(img_url, original_path):
                    print(f"  [OK] Downloaded: {jet_id}")
                else:
                    print(f"  [ERROR] Failed to download: {jet_id}")
                    continue
            else:
                print(f"  [ERROR] Could not find image URL for: {jet_id}")
                continue
        else:
            print(f"Using existing image: {jet_id}")

        # Convert to silhouette
        if convert_to_silhouette(original_path, silhouette_path):
            print(f"  [OK] Converted to silhouette: {jet_id}\n")
        else:
            print(f"  [ERROR] Failed to convert: {jet_id}\n")

    print("Done!")


if __name__ == "__main__":
    main()
