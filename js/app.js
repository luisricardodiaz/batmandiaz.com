/**
 * app.js - Main Application Orchestrator
 * Luis R Diaz Beutel - Personal Music Album Review Blog
 */

import { siteInfo, exploreGenres, currentlySpinning, reviews } from './data/reviews.js';
import { ReviewModal } from './modal.js';
import { hydrateCovers } from './coverFetcher.js';

class MusicBlogApp {
  constructor() {
    this.modal = new ReviewModal();
    this.state = {
      searchQuery: '',
      selectedGenre: 'All',
      selectedRating: 'all',
      sortBy: 'newest',
      theme: localStorage.getItem('lrd_music_theme') || (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark')
    };

    this.init();
  }

  init() {
    this.applyTheme(this.state.theme);
    this.renderEthosSection();
    this.renderFeaturedReview();
    this.renderGenrePills();
    this.renderReviewsGrid();
    this.renderCurrentlySpinning();
    this.setupEventListeners();
    this.checkInitialHash();
    // Hydrate all cover images with real artwork from iTunes
    hydrateCovers();
  }

  /* ------------------------------------------------------------------------
     1. Theme Management
     ------------------------------------------------------------------------ */
  applyTheme(theme) {
    this.state.theme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('lrd_music_theme', theme);
  }

  toggleTheme() {
    const nextTheme = this.state.theme === 'dark' ? 'light' : 'dark';
    this.applyTheme(nextTheme);
  }

  /* ------------------------------------------------------------------------
     2. Render Helpers (Stars, Badges)
     ------------------------------------------------------------------------ */
  renderStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalf = rating % 1 >= 0.5;
    let html = '<span class="star-rating" aria-label="' + rating.toFixed(1) + ' out of 5 stars">';

    for (let i = 0; i < fullStars; i++) {
      html += '<span class="star-full" aria-hidden="true">★</span>';
    }
    if (hasHalf) {
      html += '<span class="star-half" aria-hidden="true">½</span>';
    }
    const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
      html += '<span class="star-empty" aria-hidden="true">☆</span>';
    }
    html += '</span>';
    return html;
  }

  getBadgeClass(rating) {
    if (rating >= 4.9) return 'badge-masterpiece';
    if (rating >= 4.4) return 'badge-outstanding';
    if (rating >= 3.9) return 'badge-excellent';
    if (rating >= 3.4) return 'badge-great';
    return 'badge-good';
  }

  /* ------------------------------------------------------------------------
     3. The Listening Room / Ethos Section
     ------------------------------------------------------------------------ */
  renderEthosSection() {
    const ethosLeadEl = document.getElementById('siteEthosLead');
    if (ethosLeadEl && siteInfo.ethos) ethosLeadEl.textContent = siteInfo.ethos;

    const exploreGenresEl = document.getElementById('exploreGenresList');
    if (exploreGenresEl && exploreGenres) {
      exploreGenresEl.innerHTML = exploreGenres
        .map(g => `<span class="meta-pill">${g}</span>`)
        .join('');
    }
  }

  renderFeaturedReview() {
    const featured = reviews.find(r => r.featured) || reviews[0];
    if (!featured) return;

    const heroContainer = document.getElementById('heroFeaturedContainer');
    if (!heroContainer) return;

    heroContainer.innerHTML = `
      <div class="hero-content-wrapper">
        <div class="hero-text-col">
          <div class="hero-tag">
            <span class="hero-tag-pulse"></span>
            Featured Spin & Thoughts
          </div>
          <h2 class="hero-album-title">${featured.title}</h2>
          <div class="hero-artist">${featured.artist}</div>

          <div class="hero-rating-row">
            <div class="hero-star-display">
              ${this.renderStars(featured.rating)}
            </div>
            <span class="hero-score-num">${featured.rating.toFixed(1)} / 5.0</span>
            <span class="rating-badge ${this.getBadgeClass(featured.rating)}">${featured.ratingCategory}</span>
          </div>

          <blockquote class="hero-quote">
            "${featured.summaryQuote}"
          </blockquote>

          <div class="hero-meta-pills">
            <span class="meta-pill">📅 ${featured.releaseYear}</span>
            <span class="meta-pill">⏱️ ${featured.runtime}</span>
            <span class="meta-pill">🏷️ ${featured.genres.join(' • ')}</span>
          </div>

          <div class="hero-actions">
            <button class="btn-primary" data-open-review="${featured.id}">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
              Read Thoughts
            </button>
            <a href="${featured.links.spotify}" target="_blank" rel="noopener noreferrer" class="btn-secondary">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.5 17.3a.69.69 0 0 1-.95.23c-2.6-1.59-5.88-1.95-9.74-1.07a.7.7 0 0 1-.31-1.36c4.22-.96 7.84-.55 10.77 1.25.32.2.42.63.23.95zm1.46-3.26a.87.87 0 0 1-1.2.29c-2.98-1.83-7.52-2.36-11.04-1.29a.875.875 0 0 1-.51-1.67c4.02-1.22 9.04-.63 12.46 1.47.38.23.5.73.29 1.2zm.13-3.39c-3.57-2.12-9.47-2.32-12.89-1.28a1.05 1.05 0 0 1-.61-2.01c3.93-1.19 10.45-.96 14.56 1.48a1.05 1.05 0 0 1-.38 1.93.9.9 0 0 1-.68-.12z"/></svg>
              Listen on Spotify
            </a>
          </div>
        </div>

        <div class="hero-vinyl-wrapper" data-open-review="${featured.id}" style="cursor: pointer;">
          <div class="hero-sleeve">
            <img src="${featured.coverUrl}" alt="${featured.title} album cover"
                 data-fetch-artist="${featured.artist}" data-fetch-album="${featured.title}" />
          </div>
          <div class="vinyl-disc">
            <div class="vinyl-label" style="background-color: ${featured.accentColor};">
              <div class="vinyl-label-hole"></div>
            </div>
          </div>
        </div>
      </div>
    `;

    // Event listener for opening review modal from hero
    heroContainer.querySelectorAll('[data-open-review]').forEach(el => {
      el.addEventListener('click', () => {
        const id = el.getAttribute('data-open-review');
        this.modal.open(id);
      });
    });
  }

  /* ------------------------------------------------------------------------
     4. Filter & Search Controls
     ------------------------------------------------------------------------ */
  renderGenrePills() {
    const container = document.getElementById('genrePillsContainer');
    if (!container) return;

    // Collect all genres with counts
    const genreCounts = { 'All': reviews.length };
    reviews.forEach(r => {
      r.genres.forEach(g => {
        genreCounts[g] = (genreCounts[g] || 0) + 1;
      });
    });

    const genres = ['All', ...Object.keys(genreCounts).filter(g => g !== 'All').sort()];

    container.innerHTML = genres.map(g => `
      <button class="genre-pill-btn ${this.state.selectedGenre === g ? 'active' : ''}" data-genre="${g}">
        ${g}
        <span class="genre-count">${genreCounts[g]}</span>
      </button>
    `).join('');

    container.querySelectorAll('.genre-pill-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        this.state.selectedGenre = btn.getAttribute('data-genre');
        this.renderGenrePills();
        this.renderReviewsGrid();
      });
    });
  }

  getFilteredReviews() {
    return reviews.filter(r => {
      // Search query filter
      if (this.state.searchQuery.trim()) {
        const q = this.state.searchQuery.toLowerCase().trim();
        const matchesTitle = r.title.toLowerCase().includes(q);
        const matchesArtist = r.artist.toLowerCase().includes(q);
        const matchesGenres = r.genres.some(g => g.toLowerCase().includes(q));
        const matchesYear = r.releaseYear.toString().includes(q);
        const matchesContent = r.content.toLowerCase().includes(q) || r.summaryQuote.toLowerCase().includes(q);

        if (!matchesTitle && !matchesArtist && !matchesGenres && !matchesYear && !matchesContent) {
          return false;
        }
      }

      // Genre filter
      if (this.state.selectedGenre !== 'All') {
        if (!r.genres.includes(this.state.selectedGenre)) {
          return false;
        }
      }

      // Rating filter
      if (this.state.selectedRating !== 'all') {
        if (this.state.selectedRating === '5.0' && r.rating < 5.0) return false;
        if (this.state.selectedRating === '4.5' && (r.rating < 4.5 || r.rating >= 5.0)) return false;
        if (this.state.selectedRating === '4.0' && (r.rating < 4.0 || r.rating >= 4.5)) return false;
        if (this.state.selectedRating === '3.5' && r.rating >= 4.0) return false;
      }

      return true;
    }).sort((a, b) => {
      // Sorting
      if (this.state.sortBy === 'newest') {
        return new Date(b.reviewDate) - new Date(a.reviewDate);
      }
      if (this.state.sortBy === 'highest-rating') {
        return b.rating - a.rating;
      }
      if (this.state.sortBy === 'release-year') {
        return b.releaseYear - a.releaseYear;
      }
      if (this.state.sortBy === 'artist') {
        return a.artist.localeCompare(b.artist);
      }
      return 0;
    });
  }

  /* ------------------------------------------------------------------------
     5. Render Review Cards Grid
     ------------------------------------------------------------------------ */
  renderReviewsGrid() {
    const grid = document.getElementById('reviewsGridContainer');
    const countEl = document.getElementById('reviewsCountDisplay');
    if (!grid) return;

    const filtered = this.getFilteredReviews();

    if (countEl) {
      countEl.textContent = `Showing ${filtered.length} ${filtered.length === 1 ? 'album' : 'albums'}`;
    }

    if (filtered.length === 0) {
      grid.innerHTML = `
        <div class="no-results-box">
          <div class="no-results-icon">📻</div>
          <h3 class="no-results-title">No Albums or Thoughts Found</h3>
          <p>Try tweaking your search keywords or switching genres to explore other albums.</p>
          <button class="btn-primary" id="resetFiltersBtn" style="margin-top: 1rem;">
            Reset All Filters
          </button>
        </div>
      `;

      document.getElementById('resetFiltersBtn')?.addEventListener('click', () => {
        this.state.searchQuery = '';
        this.state.selectedGenre = 'All';
        this.state.selectedRating = 'all';
        const searchInput = document.getElementById('albumSearchInput');
        const clearBtn = document.getElementById('searchClearBtn');
        const ratingSelect = document.getElementById('ratingFilterSelect');
        if (searchInput) searchInput.value = '';
        if (clearBtn) clearBtn.classList.remove('active');
        if (ratingSelect) ratingSelect.value = 'all';
        this.renderGenrePills();
        this.renderReviewsGrid();
      });
      return;
    }

    grid.innerHTML = filtered.map(r => `
      <article class="review-card" data-review-id="${r.id}" tabindex="0" role="button" aria-label="Explore thoughts on ${r.title} by ${r.artist}">
        <div class="card-cover-container">
          <img class="card-cover-img" src="${r.coverUrl}" alt="${r.title} by ${r.artist}" loading="lazy"
               data-fetch-artist="${r.artist}" data-fetch-album="${r.title}" />
          <div class="card-rating-overlay">
            <span class="rating-badge ${this.getBadgeClass(r.rating)}">${r.rating.toFixed(1)} ★</span>
          </div>
          <span class="card-year-badge">${r.releaseYear}</span>
        </div>

        <div class="card-body">
          <h3 class="card-title">${r.title}</h3>
          <div class="card-artist">${r.artist}</div>

          <div class="card-stars-row">
            ${this.renderStars(r.rating)}
            <span style="font-size: 0.8rem; font-weight: 700; color: var(--text-muted);">${r.ratingCategory}</span>
          </div>

          <p class="card-quote">"${r.summaryQuote}"</p>

          <div class="card-footer">
            <div class="card-genres">
              ${r.genres.slice(0, 2).map(g => `<span class="card-genre-tag">${g}</span>`).join('')}
              ${r.genres.length > 2 ? `<span class="card-genre-tag">+${r.genres.length - 2}</span>` : ''}
            </div>
            <span class="card-read-more">
              Read Thoughts
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </span>
          </div>
        </div>
      </article>
    `).join('');

    // Attach click and enter listeners to each card
    grid.querySelectorAll('.review-card').forEach(card => {
      const id = card.getAttribute('data-review-id');
      card.addEventListener('click', () => this.modal.open(id));
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          this.modal.open(id);
        }
      });
    });

    // Hydrate any newly rendered cover images (e.g. after filter re-render)
    hydrateCovers(grid);
  }

  /* ------------------------------------------------------------------------
     6. Currently Spinning Shelf & Rubric
     ------------------------------------------------------------------------ */
  renderCurrentlySpinning() {
    const container = document.getElementById('currentlySpinningShelf');
    if (!container || !currentlySpinning) return;

    container.innerHTML = currentlySpinning.map(item => `
      <div class="shelf-item">
        <img class="shelf-cover" src="${item.cover}" alt="${item.title} cover" loading="lazy"
             data-fetch-artist="${item.artist}" data-fetch-album="${item.title}" />
        <div class="shelf-info">
          <div class="shelf-title">${item.title}</div>
          <div class="shelf-artist">${item.artist} (${item.year})</div>
          <div class="shelf-note">"${item.note}"</div>
        </div>
      </div>
    `).join('');
  }



  /* ------------------------------------------------------------------------
     7. Event Listeners & Hash Router
     ------------------------------------------------------------------------ */
  setupEventListeners() {
    // Theme toggle
    document.getElementById('themeToggleBtn')?.addEventListener('click', () => this.toggleTheme());

    // Mobile nav toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navLinks');
    mobileMenuBtn?.addEventListener('click', () => {
      navLinks?.classList.toggle('mobile-open');
    });

    // Close mobile nav when clicking a link
    navLinks?.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => navLinks.classList.remove('mobile-open'));
    });

    // Search Input with debouncing
    const searchInput = document.getElementById('albumSearchInput');
    const searchClear = document.getElementById('searchClearBtn');

    searchInput?.addEventListener('input', (e) => {
      this.state.searchQuery = e.target.value;
      if (this.state.searchQuery) {
        searchClear?.classList.add('active');
      } else {
        searchClear?.classList.remove('active');
      }
      this.renderReviewsGrid();
    });

    searchClear?.addEventListener('click', () => {
      if (searchInput) {
        searchInput.value = '';
        this.state.searchQuery = '';
        searchClear.classList.remove('active');
        searchInput.focus();
        this.renderReviewsGrid();
      }
    });

    // Rating Filter Select
    document.getElementById('ratingFilterSelect')?.addEventListener('change', (e) => {
      this.state.selectedRating = e.target.value;
      this.renderReviewsGrid();
    });

    // Sort Select
    document.getElementById('sortSelect')?.addEventListener('change', (e) => {
      this.state.sortBy = e.target.value;
      this.renderReviewsGrid();
    });

    // Hash change event (for back/forward browser navigation)
    window.addEventListener('hashchange', () => {
      this.checkInitialHash();
    });
  }

  checkInitialHash() {
    const hash = window.location.hash;
    if (hash.startsWith('#review-')) {
      const reviewId = hash.replace('#review-', '');
      this.modal.open(reviewId);
    }
  }
}

// Initialize on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  window.musicApp = new MusicBlogApp();
});
