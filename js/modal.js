/**
 * modal.js - Accessible Review Detail Modal Controller
 * Luis R Diaz Beutel - Personal Music Album Review Blog
 */

import { reviews } from './data/reviews.js';
import { fetchAlbumCover } from './coverFetcher.js';

export class ReviewModal {
  constructor() {
    this.overlay = document.getElementById('reviewModalOverlay');
    this.container = document.getElementById('reviewModalContainer');
    this.closeBtn = document.getElementById('modalCloseBtn');
    this.currentReviewId = null;
    this.previousActiveElement = null;

    this.initEventListeners();
  }

  initEventListeners() {
    // Close on button click
    this.closeBtn?.addEventListener('click', () => this.close());

    // Close on overlay backdrop click
    this.overlay?.addEventListener('click', (e) => {
      if (e.target === this.overlay) {
        this.close();
      }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isOpen()) {
        this.close();
      }
    });
  }

  isOpen() {
    return this.overlay?.classList.contains('active');
  }

  open(reviewId) {
    const review = reviews.find(r => r.id === reviewId);
    if (!review) return;

    this.currentReviewId = reviewId;
    this.previousActiveElement = document.activeElement;

    this.populateModal(review);

    // Update URL hash for shareable deep-linking without scrolling
    history.replaceState(null, '', `#review-${review.id}`);

    // Show modal
    this.overlay.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Focus close button for accessibility
    setTimeout(() => {
      this.closeBtn?.focus();
    }, 100);
  }

  close() {
    if (!this.isOpen()) return;

    this.overlay.classList.remove('active');
    document.body.style.overflow = '';
    this.currentReviewId = null;

    // Reset URL hash
    if (window.location.hash.startsWith('#review-')) {
      history.replaceState(null, '', window.location.pathname + window.location.search);
    }

    // Return focus
    if (this.previousActiveElement && typeof this.previousActiveElement.focus === 'function') {
      this.previousActiveElement.focus();
    }
  }

  populateModal(review) {
    // Cover & Meta
    const coverImg = document.getElementById('modalCoverImg');
    const vinylDisc = document.getElementById('modalVinylDisc');
    const metaYear = document.getElementById('modalMetaYear');
    const metaLabel = document.getElementById('modalMetaLabel');
    const metaRuntime = document.getElementById('modalMetaRuntime');
    const metaTracks = document.getElementById('modalMetaTracks');
    const metaGenres = document.getElementById('modalMetaGenres');

    // Title & Score
    const titleElem = document.getElementById('modalTitle');
    const artistElem = document.getElementById('modalArtist');
    const starsElem = document.getElementById('modalStars');
    const scoreElem = document.getElementById('modalScore');
    const badgeElem = document.getElementById('modalBadge');

    // Criteria meters
    const sonicsBar = document.getElementById('modalMeterSonics');
    const sonicsVal = document.getElementById('modalValSonics');
    const emotionBar = document.getElementById('modalMeterEmotion');
    const emotionVal = document.getElementById('modalValEmotion');
    const songwritingBar = document.getElementById('modalMeterSongwriting');
    const songwritingVal = document.getElementById('modalValSongwriting');
    const replayBar = document.getElementById('modalMeterReplay');
    const replayVal = document.getElementById('modalValReplay');

    // Highlights
    const standoutsContainer = document.getElementById('modalStandouts');
    const gemsContainer = document.getElementById('modalGems');

    // Essay & Links
    const essayElem = document.getElementById('modalEssay');
    const spotifyLink = document.getElementById('modalLinkSpotify');
    const appleLink = document.getElementById('modalLinkApple');
    const youtubeLink = document.getElementById('modalLinkYoutube');
    const shareBtn = document.getElementById('modalShareBtn');

    if (coverImg) {
      coverImg.src = review.coverUrl; // Show placeholder immediately
      coverImg.alt = `${review.title} by ${review.artist}`;
      coverImg.onerror = () => { coverImg.src = 'assets/images/cd-stock.svg'; };

      // Fetch real artwork from iTunes asynchronously
      fetchAlbumCover(review.artist, review.title).then(url => {
        if (url) coverImg.src = url;
      });
    }

    if (vinylDisc && review.accentColor) {
      const vinylLabel = vinylDisc.querySelector('.vinyl-label');
      if (vinylLabel) vinylLabel.style.backgroundColor = review.accentColor;
    }

    if (metaYear) metaYear.textContent = review.releaseYear;
    if (metaLabel) metaLabel.textContent = review.label || 'Independent';
    if (metaRuntime) metaRuntime.textContent = review.runtime || 'N/A';
    if (metaTracks) metaTracks.textContent = `${review.trackCount} Tracks`;
    if (metaGenres) metaGenres.textContent = review.genres.join(', ');

    if (titleElem) titleElem.textContent = review.title;
    if (artistElem) artistElem.textContent = review.artist;

    if (starsElem) {
      starsElem.innerHTML = this.renderStarsHTML(review.rating);
    }
    if (scoreElem) scoreElem.textContent = `${review.rating.toFixed(1)} / 5.0`;

    if (badgeElem) {
      badgeElem.textContent = review.ratingCategory;
      badgeElem.className = `rating-badge ${this.getBadgeClass(review.rating)}`;
    }

    // Criteria breakdown calculation (percentage out of 5.0)
    if (sonicsBar && sonicsVal && review.criteria?.sonics) {
      sonicsVal.textContent = `${review.criteria.sonics.toFixed(1)} / 5.0`;
      sonicsBar.style.width = `${(review.criteria.sonics / 5.0) * 100}%`;
    }
    if (emotionBar && emotionVal && review.criteria?.emotion) {
      emotionVal.textContent = `${review.criteria.emotion.toFixed(1)} / 5.0`;
      emotionBar.style.width = `${(review.criteria.emotion / 5.0) * 100}%`;
    }
    if (songwritingBar && songwritingVal && review.criteria?.songwriting) {
      songwritingVal.textContent = `${review.criteria.songwriting.toFixed(1)} / 5.0`;
      songwritingBar.style.width = `${(review.criteria.songwriting / 5.0) * 100}%`;
    }
    if (replayBar && replayVal && review.criteria?.replay) {
      replayVal.textContent = `${review.criteria.replay.toFixed(1)} / 5.0`;
      replayBar.style.width = `${(review.criteria.replay / 5.0) * 100}%`;
    }

    // Standout tracks
    if (standoutsContainer) {
      standoutsContainer.innerHTML = review.standoutTracks
        .map(t => `<span class="track-chip track-chip-highlight">${t}</span>`)
        .join('');
    }

    // Hidden Gems
    if (gemsContainer) {
      gemsContainer.innerHTML = review.hiddenGems && review.hiddenGems.length > 0
        ? review.hiddenGems.map(t => `<span class="track-chip">${t}</span>`).join('')
        : '<span class="text-muted" style="font-size:0.85rem">None listed</span>';
    }

    // Full Essay Render
    if (essayElem) {
      essayElem.innerHTML = this.formatReviewMarkdown(review.content);
    }

    // Listen Links
    if (spotifyLink) {
      spotifyLink.href = review.links.spotify || '#';
      spotifyLink.style.display = review.links.spotify ? 'inline-flex' : 'none';
    }
    if (appleLink) {
      appleLink.href = review.links.apple || '#';
      appleLink.style.display = review.links.apple ? 'inline-flex' : 'none';
    }
    if (youtubeLink) {
      youtubeLink.href = review.links.youtube || '#';
      youtubeLink.style.display = review.links.youtube ? 'inline-flex' : 'none';
    }

    // Share button
    if (shareBtn) {
      shareBtn.onclick = () => {
        const shareUrl = `${window.location.origin}${window.location.pathname}#review-${review.id}`;
        navigator.clipboard.writeText(shareUrl).then(() => {
          this.showToast(`Link copied to clipboard for "${review.title}"!`);
        });
      };
    }
  }

  renderStarsHTML(rating) {
    const fullStars = Math.floor(rating);
    const hasHalf = rating % 1 >= 0.5;
    let html = '';

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
    return html;
  }

  getBadgeClass(rating) {
    if (rating >= 4.9) return 'badge-masterpiece';
    if (rating >= 4.4) return 'badge-outstanding';
    if (rating >= 3.9) return 'badge-excellent';
    if (rating >= 3.4) return 'badge-great';
    return 'badge-good';
  }

  formatReviewMarkdown(markdownText) {
    if (!markdownText) return '';
    let html = markdownText.trim();

    // Escape basic HTML
    html = html.replace(/</g, '&lt;').replace(/>/g, '&gt;');

    // Headings
    html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>');
    html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>');

    // Bold & Italics
    html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');

    // Lists
    html = html.replace(/^\- (.*$)/gim, '<li>$1</li>');
    html = html.replace(/(<li>.*<\/li>)/gms, '<ul>$1</ul>');

    // Paragraphs
    const paragraphs = html.split(/\n\n+/);
    return paragraphs
      .map(p => {
        p = p.trim();
        if (p.startsWith('<h3>') || p.startsWith('<h2>') || p.startsWith('<ul>')) {
          return p;
        }
        return `<p>${p.replace(/\n/g, '<br>')}</p>`;
      })
      .join('');
  }

  showToast(message) {
    let toast = document.getElementById('siteToast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'siteToast';
      toast.className = 'toast';
      document.body.appendChild(toast);
    }
    toast.innerHTML = `<span>🎵</span> ${message}`;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3000);
  }
}
