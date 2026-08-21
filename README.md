# 🎵 The Listening Room — Music Thoughts

A sleek, responsive, and welcoming music blog dedicated to **celebrating full-length records, honest musical opinions, and sonic discovery across every genre**.

---

## ✨ Key Features

- **💿 Clean Vector CD Artwork**:
  - Crisp, iridescent vector **Compact Disc** graphic with metallic diffraction and realistic details.
  - Square 1:1 CD jewel case card proportions.
- **🔍 Real-Time Search & Filtering**:
  - Instant search across album titles, artist names, release years, genres, and review content.
  - Interactive **Genre Filter Pills** with real-time album counters.
  - Star rating filter and multi-criteria sorting (Newest, Highest Rated, Release Year, Artist).
- **📖 Rich Review Detail Modal**:
  - Full-length review essay.
- **🔥 Essential Standout Tracks** & 💡 **Hidden Gems**.
  - Direct streaming links to Spotify, Apple Music, and YouTube.
  - One-click shareable review links with deep-linking support (`#review-<id>`).
- **📻 "Currently Spinning" Turntable Shelf**:
  - Mini shelf displaying what albums are currently in heavy rotation with listening notes.
- **🎧 The Listening Room**:
  - An inviting, relatable space welcoming fellow music listeners to explore soundscapes across genres without pretension.
- **🌓 Dark & Light Modes**:
  - Smooth theme toggling with `localStorage` persistence and system color preference detection.
- **⚡ Zero Build Dependencies**:
  - Pure HTML5, Modern CSS, and modular ES6 JavaScript. No compilation or node_modules needed to run!

---

## 🚀 How to Run Locally

Preview the website immediately with any static server:

```bash
python3 -m http.server 8000
```
Then open [http://localhost:8000](http://localhost:8000) in your browser.

---

## ✍️ How to Add or Edit Album Reviews

### Adding a New Review
Open `js/data/reviews.js` and add an entry to the `reviews` array:

```javascript
{
  id: "album-title-artist-name",
  featured: false, // Set to true to highlight in the hero banner
  title: "Album Title",
  artist: "Artist Name",
  releaseYear: 2024,
  reviewDate: "2026-08-19",
  genres: ["Art Rock", "Electronic"],
  coverUrl: STOCK_CD_IMAGE, // Uses the vector CD graphic
  coverAlt: "Album Title by Artist Name CD",
  accentColor: "#f9c74f", // Hex color for the vinyl center label
  label: "Record Label Name",
  runtime: "48 min",
  trackCount: 11,
  standoutTracks: ["Track 1", "Track 3", "Track 7"],
  hiddenGems: ["Track 5"],
  links: {
    spotify: "https://open.spotify.com/album/...",
    apple: "https://music.apple.com/...",
    youtube: "https://www.youtube.com/..."
  }
  summaryQuote: "A one-sentence summary capturing the core vibe and verdict of the album.",
  content: `
Write your multi-paragraph review here. You can use standard markdown:

### Key Highlights
- Bullet points
- **Bold text** and *italics*
  `
}
```

---

## 🌐 Deploying to the Web

Because this is a pure static website, you can host it for free on any modern hosting provider:
- **GitHub Pages**: Push this repository to GitHub, go to **Settings > Pages**, choose `main` branch root `/`, and save!
- **Cloudflare Pages / Vercel / Netlify**: Connect your repository or drag-and-drop the directory.

---

## 📂 Project Structure

```
batmandiaz/
├── index.html              # Semantic single-page application
├── assets/
│   └── images/
│       └── cd-stock.svg    # High-resolution vector compact disc artwork
├── css/
│   ├── main.css            # Design tokens, variables, typography, vinyl disc styles, star classes
│   ├── components.css      # Header, hero, album cards, rating meters, modal, shelf, ethos
│   └── responsive.css      # Tablet and mobile responsiveness
├── js/
│   ├── app.js              # State manager, search, 5-star renderer, genre pill filters
│   ├── modal.js            # Review detail modal controller with deep linking & keyboard support
│   └── data/
│       └── reviews.js      # Curated review dataset and currently spinning items
└── README.md               # User guide and documentation
```
