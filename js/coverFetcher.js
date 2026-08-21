/**
 * coverFetcher.js
 * Fetches real album artwork from the iTunes Search API.
 * Free · No API key · CORS-enabled · Works in any browser.
 */

/** In-memory cache: "artist::album" → artworkUrl | null */
const _cache = new Map();

/**
 * Fetches a high-resolution album cover URL from the iTunes Search API.
 * @param {string} artist
 * @param {string} album
 * @returns {Promise<string|null>} Artwork URL (600×600) or null on failure.
 */
export async function fetchAlbumCover(artist, album) {
  const key = `${artist}::${album}`;
  if (_cache.has(key)) return _cache.get(key);

  try {
    const term = encodeURIComponent(`${artist} ${album}`);
    const url = `https://itunes.apple.com/search?term=${term}&entity=album&media=music&limit=5&attribute=albumTerm`;
    const res = await fetch(url);
    if (!res.ok) throw new Error(`iTunes API error: ${res.status}`);
    const data = await res.json();

    if (data.results && data.results.length > 0) {
      // Prefer the result whose title best matches the requested album
      const lower = album.toLowerCase();
      const best =
        data.results.find(r => r.collectionName?.toLowerCase().includes(lower)) ||
        data.results[0];

      // artworkUrl100 → artworkUrl600 for crisp display
      const artworkUrl = (best.artworkUrl100 || '').replace('100x100bb', '600x600bb');
      _cache.set(key, artworkUrl || null);
      return artworkUrl || null;
    }
  } catch (err) {
    console.warn(`[coverFetcher] Could not fetch cover for "${artist} – ${album}":`, err);
  }

  _cache.set(key, null);
  return null;
}

/**
 * Hydrates all cover <img> elements that carry data-fetch-artist / data-fetch-album
 * attributes by fetching real artwork and swapping the src.
 * @param {Element} [root=document] The DOM subtree to search within.
 */
export async function hydrateCovers(root = document) {
  const imgs = root.querySelectorAll('img[data-fetch-artist][data-fetch-album]');
  if (!imgs.length) return;

  await Promise.allSettled(
    [...imgs].map(async (img) => {
      const artist = img.dataset.fetchArtist;
      const album = img.dataset.fetchAlbum;
      const url = await fetchAlbumCover(artist, album);
      if (url) {
        img.src = url;
        img.removeAttribute('data-fetch-artist');
        img.removeAttribute('data-fetch-album');
      }
    })
  );
}
