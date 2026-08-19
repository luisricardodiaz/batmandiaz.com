/**
 * reviews.js - Music Album Reviews Dataset
 * Curated for Luis R Diaz Beutel's Personal Music Blog
 * 
 * Rating Philosophy: 5-Star System (Constructive & Holistic Critique)
 * 5.0 = Masterpiece | 4.5 = Outstanding | 4.0 = Excellent | 3.5 = Great/Worthwhile | 3.0 = Good/Promising
 */

export const STOCK_CD_IMAGE = 'assets/images/cd-stock.svg';


export const siteInfo = {
  title: "The Listening Room",
  tagline: "",
  ethos: ""
};

export const exploreGenres = [
  "Hip-Hop", "Art Rock", "Jazz", "Electronic", "Latin",
  "Indie", "R&B / Soul", "Ambient / IDM", "Shoegaze", "Classic Rock", "Metal"
];

export const currentlySpinning = [
  {
    title: "Geogaddi",
    artist: "Boards of Canada",
    year: 2002,
    cover: STOCK_CD_IMAGE,
    genre: "Electronic / IDM",
    note: ""
  },
  {
    title: "Songs in the Key of Life",
    artist: "Stevie Wonder",
    year: 1976,
    cover: STOCK_CD_IMAGE,
    genre: "Soul / R&B",
    note: ""
  },
  {
    title: "Glow On",
    artist: "Turnstile",
    year: 2021,
    cover: STOCK_CD_IMAGE,
    genre: "Hardcore / Alternative",
    note: ""
  },
  {
    title: "Promise",
    artist: "Sade",
    year: 1985,
    cover: STOCK_CD_IMAGE,
    genre: "Sophisti-Pop / Soul",
    note: ""
  }
];

export const reviews = [
  {
    id: "tpab-kendrick-lamar",
    featured: true,
    title: "To Pimp a Butterfly",
    artist: "Kendrick Lamar",
    releaseYear: 2015,
    reviewDate: "2026-08-15",
    rating: 5.0,
    ratingCategory: "All-Time Favorite",
    genres: ["Hip-Hop", "Jazz", "Funk", "Soul"],
    coverUrl: STOCK_CD_IMAGE,
    coverAlt: "Kendrick Lamar - To Pimp a Butterfly CD",
    accentColor: "#d4af37",
    label: "Top Dawg / Aftermath / Interscope",
    runtime: "78 min",
    trackCount: 16,
    standoutTracks: ["Wesley's Theory", "Alright", "These Walls", "The Blacker the Berry", "How Much a Dollar Cost"],
    hiddenGems: ["Momma", "Complexion (A Zulu Love)"],
    links: {
      spotify: "https://open.spotify.com/album/7ycBtnsMtyVbbwTfJwRjSP",
      apple: "https://music.apple.com/us/album/to-pimp-a-butterfly/1440828886",
      youtube: "https://www.youtube.com/results?search_query=kendrick+lamar+to+pimp+a+butterfly+full+album"
    },
    criteria: {
      sonics: 5.0,
      emotion: 5.0,
      songwriting: 5.0,
      replay: 4.8
    },
    summaryQuote: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    content: `

    `
  },
  {
    id: "in-rainbows-radiohead",
    featured: false,
    title: "In Rainbows",
    artist: "Radiohead",
    releaseYear: 2007,
    reviewDate: "2026-08-10",
    rating: 5.0,
    ratingCategory: "All-Time Favorite",
    genres: ["Art Rock", "Alternative", "Indie"],
    coverUrl: STOCK_CD_IMAGE,
    coverAlt: "Radiohead - In Rainbows CD",
    accentColor: "#e63946",
    label: "XL Recordings / Self-Released",
    runtime: "42 min",
    trackCount: 10,
    standoutTracks: ["15 Step", "Weird Fishes/Arpeggi", "Nude", "Reckoner", "Jigsaw Falling Into Place"],
    hiddenGems: ["House of Cards", "Videotape"],
    links: {
      spotify: "https://open.spotify.com/album/5vkqYmiPjjLaalcmXZMrAZ",
      apple: "https://music.apple.com/us/album/in-rainbows/1109714933",
      youtube: "https://www.youtube.com/results?search_query=radiohead+in+rainbows+full+album"
    },
    criteria: {
      sonics: 5.0,
      emotion: 5.0,
      songwriting: 5.0,
      replay: 5.0
    },
    summaryQuote: "",
    content: `

    `
  },
  {
    id: "kind-of-blue-miles-davis",
    featured: false,
    title: "Kind of Blue",
    artist: "Miles Davis",
    releaseYear: 1959,
    reviewDate: "2026-07-28",
    rating: 5.0,
    ratingCategory: "All-Time Favorite",
    genres: ["Jazz", "Cool Jazz"],
    coverUrl: STOCK_CD_IMAGE,
    coverAlt: "Miles Davis - Kind of Blue CD",
    accentColor: "#1d3557",
    label: "Columbia Records",
    runtime: "45 min",
    trackCount: 5,
    standoutTracks: ["So What", "Blue in Green", "Flamenco Sketches", "Freddie Freeloader"],
    hiddenGems: ["All Blues"],
    links: {
      spotify: "https://open.spotify.com/album/1weenldZZIKCYSTKxrUiC0",
      apple: "https://music.apple.com/us/album/kind-of-blue/268443092",
      youtube: "https://www.youtube.com/results?search_query=miles+davis+kind+of+blue+full+album"
    },
    criteria: {
      sonics: 5.0,
      emotion: 5.0,
      songwriting: 5.0,
      replay: 5.0
    },
    summaryQuote: "",
    content: `

    `
  },
  {
    id: "motomami-rosalia",
    featured: false,
    title: "MOTOMAMI",
    artist: "Rosalía",
    releaseYear: 2022,
    reviewDate: "2026-07-15",
    rating: 4.5,
    ratingCategory: "Loved It",
    genres: ["Latin", "Electronic", "Pop"],
    coverUrl: STOCK_CD_IMAGE,
    coverAlt: "Rosalía - MOTOMAMI CD",
    accentColor: "#ff0054",
    label: "Columbia Records",
    runtime: "42 min",
    trackCount: 16,
    standoutTracks: ["SAKURA", "HENTAI", "SAOKO", "CANDY", "CUUUUuuuuuute"],
    hiddenGems: ["G3 N15", "BULERÍAS"],
    links: {
      spotify: "https://open.spotify.com/album/6jojKbhhEZqPXZiZ9GE0X7",
      apple: "https://music.apple.com/us/album/motomami/1607918350",
      youtube: "https://www.youtube.com/results?search_query=rosalia+motomami+full+album"
    },
    criteria: {
      sonics: 4.8,
      emotion: 4.5,
      songwriting: 4.4,
      replay: 4.7
    },
    summaryQuote: "",
    content: `

    `
  },
  {
    id: "ram-daft-punk",
    featured: false,
    title: "Random Access Memories",
    artist: "Daft Punk",
    releaseYear: 2013,
    reviewDate: "2026-07-02",
    rating: 5.0,
    ratingCategory: "All-Time Favorite",
    genres: ["Electronic", "R&B / Soul"],
    coverUrl: STOCK_CD_IMAGE,
    coverAlt: "Daft Punk - Random Access Memories CD",
    accentColor: "#f77f00",
    label: "Columbia / Daft Life",
    runtime: "74 min",
    trackCount: 13,
    standoutTracks: ["Get Lucky", "Touch", "Giorgio by Moroder", "Instant Crush", "Lose Yourself to Dance"],
    hiddenGems: ["Contact", "Within"],
    links: {
      spotify: "https://open.spotify.com/album/4m2880jivSbbyEGAKfITCa",
      apple: "https://music.apple.com/us/album/random-access-memories/617154241",
      youtube: "https://www.youtube.com/results?search_query=daft+punk+random+access+memories+full+album"
    },
    criteria: {
      sonics: 5.0,
      emotion: 4.8,
      songwriting: 4.9,
      replay: 5.0
    },
    summaryQuote: "",
    content: `
    `
  },
  {
    id: "rumours-fleetwood-mac",
    featured: false,
    title: "Rumours",
    artist: "Fleetwood Mac",
    releaseYear: 1977,
    reviewDate: "2026-06-20",
    rating: 5.0,
    ratingCategory: "All-Time Favorite",
    genres: ["Classic Rock", "Pop"],
    coverUrl: STOCK_CD_IMAGE,
    coverAlt: "Fleetwood Mac - Rumours CD",
    accentColor: "#bc6c25",
    label: "Warner Bros. Records",
    runtime: "39 min",
    trackCount: 11,
    standoutTracks: ["Dreams", "Go Your Own Way", "The Chain", "Don't Stop", "Gold Dust Woman"],
    hiddenGems: ["Songbird", "You Make Loving Fun"],
    links: {
      spotify: "https://open.spotify.com/album/1btWGBz4Uu1HozTwUQ329w",
      apple: "https://music.apple.com/us/album/rumours/594061854",
      youtube: "https://www.youtube.com/results?search_query=fleetwood+mac+rumours+full+album"
    },
    criteria: {
      sonics: 4.9,
      emotion: 5.0,
      songwriting: 5.0,
      replay: 5.0
    },
    summaryQuote: "",
    content: `

    `
  },
  {
    id: "selected-ambient-works-aphex-twin",
    featured: false,
    title: "Selected Ambient Works 85-92",
    artist: "Aphex Twin",
    releaseYear: 1992,
    reviewDate: "2026-06-05",
    rating: 4.5,
    ratingCategory: "Loved It",
    genres: ["Ambient / IDM", "Electronic"],
    coverUrl: STOCK_CD_IMAGE,
    coverAlt: "Aphex Twin - Selected Ambient Works CD",
    accentColor: "#2a9d8f",
    label: "Apollo / R&S Records",
    runtime: "74 min",
    trackCount: 13,
    standoutTracks: ["Xtal", "Pulsewidth", "Ageispolis", "Heliosphan", "Delphium"],
    hiddenGems: ["Tha", "Hedphelym"],
    links: {
      spotify: "https://open.spotify.com/album/7aNclGRxTysfh6z0d8671U",
      apple: "https://music.apple.com/us/album/selected-ambient-works-85-92/282559693",
      youtube: "https://www.youtube.com/results?search_query=aphex+twin+selected+ambient+works+85-92"
    },
    criteria: {
      sonics: 4.5,
      emotion: 4.8,
      songwriting: 4.5,
      replay: 4.6
    },
    summaryQuote: "",
    content: `

    `
  },
  {
    id: "chet-baker-sings",
    featured: false,
    title: "Chet Baker Sings",
    artist: "Chet Baker",
    releaseYear: 1954,
    reviewDate: "2026-05-18",
    rating: 4.5,
    ratingCategory: "Loved It",
    genres: ["Jazz"],
    coverUrl: STOCK_CD_IMAGE,
    coverAlt: "Chet Baker Sings CD",
    accentColor: "#457b9d",
    label: "Pacific Jazz Records",
    runtime: "43 min",
    trackCount: 14,
    standoutTracks: ["My Funny Valentine", "I Fall in Love Too Easily", "I Get Along Without You Very Well", "There Will Never Be Another You"],
    hiddenGems: ["But Not for Me", "Like Someone in Love"],
    links: {
      spotify: "https://open.spotify.com/album/5j0u71b402R2Wl3v9v0fTq",
      apple: "https://music.apple.com/us/album/chet-baker-sings/1440835154",
      youtube: "https://www.youtube.com/results?search_query=chet+baker+sings+full+album"
    },
    criteria: {
      sonics: 4.3,
      emotion: 5.0,
      songwriting: 4.7,
      replay: 4.8
    },
    summaryQuote: "",
    content: `
    `
  },
  {
    id: "wish-you-were-here-pink-floyd",
    featured: false,
    title: "Wish You Were Here",
    artist: "Pink Floyd",
    releaseYear: 1975,
    reviewDate: "2026-05-02",
    rating: 5.0,
    ratingCategory: "All-Time Favorite",
    genres: ["Art Rock", "Classic Rock"],
    coverUrl: STOCK_CD_IMAGE,
    coverAlt: "Pink Floyd - Wish You Were Here CD",
    accentColor: "#e76f51",
    label: "Harvest / EMI",
    runtime: "44 min",
    trackCount: 5,
    standoutTracks: ["Shine On You Crazy Diamond (Pts. 1-5)", "Wish You Were Here", "Shine On You Crazy Diamond (Pts. 6-9)", "Welcome to the Machine"],
    hiddenGems: ["Have a Cigar"],
    links: {
      spotify: "https://open.spotify.com/album/0bCAfgFGHyAh7T6elqIj9b",
      apple: "https://music.apple.com/us/album/wish-you-were-here/1065973975",
      youtube: "https://www.youtube.com/results?search_query=pink+floyd+wish+you+were+here+full+album"
    },
    criteria: {
      sonics: 5.0,
      emotion: 5.0,
      songwriting: 4.9,
      replay: 4.8
    },
    summaryQuote: "",
    content: `
    `
  },
  {
    id: "souvlaki-slowdive",
    featured: false,
    title: "Souvlaki",
    artist: "Slowdive",
    releaseYear: 1993,
    reviewDate: "2026-04-14",
    rating: 4.5,
    ratingCategory: "Loved It",
    genres: ["Shoegaze", "Indie"],
    coverUrl: STOCK_CD_IMAGE,
    coverAlt: "Slowdive - Souvlaki CD",
    accentColor: "#8338ec",
    label: "Creation Records",
    runtime: "40 min",
    trackCount: 10,
    standoutTracks: ["Alison", "When the Sun Hits", "40 Days", "Machine Gun", "Dagger"],
    hiddenGems: ["Sing", "Souvlaki Space Station"],
    links: {
      spotify: "https://open.spotify.com/album/53tfAupip9ycwh9ZSp5HgZ",
      apple: "https://music.apple.com/us/album/souvlaki/292885238",
      youtube: "https://www.youtube.com/results?search_query=slowdive+souvlaki+full+album"
    },
    criteria: {
      sonics: 4.8,
      emotion: 4.9,
      songwriting: 4.4,
      replay: 4.7
    },
    summaryQuote: "",
    content: `

    `
  },
  {
    id: "clube-da-esquina-milton-nascimento",
    featured: false,
    title: "Clube da Esquina",
    artist: "Milton Nascimento & Lô Borges",
    releaseYear: 1972,
    reviewDate: "2026-03-22",
    rating: 5.0,
    ratingCategory: "All-Time Favorite",
    genres: ["Latin", "Art Rock", "Jazz"],
    coverUrl: STOCK_CD_IMAGE,
    coverAlt: "Clube da Esquina CD",
    accentColor: "#3a86ff",
    label: "Odeon",
    runtime: "64 min",
    trackCount: 21,
    standoutTracks: ["Tudo Que Você Podia Ser", "Cais", "O Trem Azul", "Clube da Esquina Nº 2", "San Vicente"],
    hiddenGems: ["Cravo e Canela", "Nuvem Cigana"],
    links: {
      spotify: "https://open.spotify.com/album/222k3PqO9eP55bWqP49b5L",
      apple: "https://music.apple.com/us/album/clube-da-esquina/714264627",
      youtube: "https://www.youtube.com/results?search_query=clube+da+esquina+milton+nascimento+full+album"
    },
    criteria: {
      sonics: 4.9,
      emotion: 5.0,
      songwriting: 5.0,
      replay: 4.8
    },
    summaryQuote: "",
    content: `
    `
  },
  {
    id: "master-of-puppets-metallica",
    featured: false,
    title: "Master of Puppets",
    artist: "Metallica",
    releaseYear: 1986,
    reviewDate: "2026-03-05",
    rating: 4.5,
    ratingCategory: "Loved It",
    genres: ["Metal", "Classic Rock"],
    coverUrl: STOCK_CD_IMAGE,
    coverAlt: "Metallica - Master of Puppets CD",
    accentColor: "#d90429",
    label: "Elektra Records",
    runtime: "54 min",
    trackCount: 8,
    standoutTracks: ["Battery", "Master of Puppets", "Welcome Home (Sanitarium)", "Orion"],
    hiddenGems: ["Disposable Heroes", "Damage, Inc."],
    links: {
      spotify: "https://open.spotify.com/album/2Lq2qX3hYhiuPckC8flj21",
      apple: "https://music.apple.com/us/album/master-of-puppets/579372950",
      youtube: "https://www.youtube.com/results?search_query=metallica+master+of+puppets+full+album"
    },
    criteria: {
      sonics: 4.6,
      emotion: 4.7,
      songwriting: 4.8,
      replay: 4.6
    },
    summaryQuote: "",
    content: `
    `
  },
  {
    id: "blond-frank-ocean",
    featured: false,
    title: "Blonde",
    artist: "Frank Ocean",
    releaseYear: 2016,
    reviewDate: "2026-02-18",
    rating: 5.0,
    ratingCategory: "All-Time Favorite",
    genres: ["R&B / Soul", "Indie", "Pop"],
    coverUrl: STOCK_CD_IMAGE,
    coverAlt: "Frank Ocean - Blonde CD",
    accentColor: "#588157",
    label: "Boys Don't Cry",
    runtime: "60 min",
    trackCount: 17,
    standoutTracks: ["Nikes", "Ivy", "Pink + White", "Self Control", "Nights", "White Ferrari", "Godspeed"],
    hiddenGems: ["Seigfried", "Solo"],
    links: {
      spotify: "https://open.spotify.com/album/3mH6qwIy9crq0I9YQbOuDf",
      apple: "https://music.apple.com/us/album/blonde/1146195596",
      youtube: "https://www.youtube.com/results?search_query=frank+ocean+blonde+full+album"
    },
    criteria: {
      sonics: 5.0,
      emotion: 5.0,
      songwriting: 5.0,
      replay: 5.0
    },
    summaryQuote: "",
    content: `

    `
  },
  {
    id: "unknown-pleasures-joy-division",
    featured: false,
    title: "Unknown Pleasures",
    artist: "Joy Division",
    releaseYear: 1979,
    reviewDate: "2026-01-30",
    rating: 4.5,
    ratingCategory: "Loved It",
    genres: ["Art Rock", "Indie"],
    coverUrl: STOCK_CD_IMAGE,
    coverAlt: "Joy Division - Unknown Pleasures CD",
    accentColor: "#ced4da",
    label: "Factory Records",
    runtime: "39 min",
    trackCount: 10,
    standoutTracks: ["Disorder", "Day of the Lords", "New Dawn Fades", "She's Lost Control", "Shadowplay"],
    hiddenGems: ["Interzone", "I Remember Nothing"],
    links: {
      spotify: "https://open.spotify.com/album/0NgMgoxGQwK0G3h0mJgP7E",
      apple: "https://music.apple.com/us/album/unknown-pleasures/404302329",
      youtube: "https://www.youtube.com/results?search_query=joy+division+unknown+pleasures+full+album"
    },
    criteria: {
      sonics: 4.8,
      emotion: 4.9,
      songwriting: 4.5,
      replay: 4.4
    },
    summaryQuote: "",
    content: `
    `
  }
];


