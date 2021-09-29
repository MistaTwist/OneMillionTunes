import { persistStore } from './persistStore';

const defaultTunes = [
  { id: 0, 
    hasBeenReviewed: false, 
    submittedBy: 'system_default', 
    spotifyUrl: 'https://open.spotify.com/track/4cOdK2wGLETKBW3PvgPWqT?si=5485c808112a4204',
    isLiked: null,
    dateSubmitted: '26/9/2021'
  },
  { id: 1, 
    hasBeenReviewed: true, 
    submittedBy: 'system_default', 
    spotifyUrl: 'https://open.spotify.com/track/4CcdTUHu1kVVKXH20NIZCo?si=c85b4dc687064120', 
    isLiked: true,
    dateSubmitted: '26/9/2021'
  },
];

export const submittedTunes = persistStore('submittedtunes', defaultTunes);