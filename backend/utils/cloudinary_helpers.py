import re
import cloudinary.uploader
from bs4 import BeautifulSoup


def extract_public_id(url: str) -> str | None:
    """
    Extracts Cloudinary public_id from a secure URL.
    e.g. https://res.cloudinary.com/mycloud/image/upload/v1234/portfolio/content/abc123.jpg
    → portfolio/content/abc123
    """
    if not url or "cloudinary.com" not in url:
        return None
    try:
        # Strip query params
        url = url.split("?")[0]
        # Pattern: everything after /upload/v{digits}/ or /upload/
        match = re.search(r'/upload/(?:v\d+/)?(.+?)(?:\.\w+)?$', url)
        if match:
            return match.group(1)
    except Exception:
        pass
    return None


def extract_content_image_urls(html_content: str) -> list[str]:
    """
    Parses TipTap HTML and returns all Cloudinary img src URLs found in the content.
    """
    if not html_content:
        return []
    try:
        soup = BeautifulSoup(html_content, "html.parser")
        return [
            img["src"]
            for img in soup.find_all("img")
            if img.get("src") and "cloudinary.com" in img.get("src", "")
        ]
    except Exception:
        return []


def delete_cloudinary_image(url: str) -> bool:
    """Delete a single image from Cloudinary by URL. Returns True if deleted."""
    public_id = extract_public_id(url)
    if not public_id:
        return False
    try:
        result = cloudinary.uploader.destroy(public_id)
        return result.get("result") == "ok"
    except Exception as e:
        print(f"Cloudinary delete failed for {public_id}: {e}")
        return False


def delete_cloudinary_images(urls: list[str]) -> None:
    """Delete multiple images from Cloudinary. Silently skips failures."""
    for url in urls:
        if url:
            delete_cloudinary_image(url)


def collect_all_images_for_record(thumbnail: str | None, content: str | None) -> list[str]:
    """
    Collects all Cloudinary URLs associated with a record:
    - thumbnail URL
    - all <img> srcs inside TipTap HTML content
    """
    urls = []
    if thumbnail:
        urls.append(thumbnail)
    if content:
        urls.extend(extract_content_image_urls(content))
    # Deduplicate
    return list(dict.fromkeys(filter(None, urls)))