import { persistStore } from './persistStore';

const defaultTunes = [
  { id: 0, 
    hasBeenReviewed: true, 
    submittedBy: 'system_default', 
    spotifyUrl: '4cOdK2wGLETKBW3PvgPWqT',
    isLiked: false,
    dateSubmitted: '26/9/2021'
  },
  { id: 1, 
    hasBeenReviewed: true, 
    submittedBy: 'system_default', 
    spotifyUrl: '4CcdTUHu1kVVKXH20NIZCo', 
    isLiked: true,
    dateSubmitted: '26/9/2021'
  },
  { id: 2, 
    hasBeenReviewed: false, 
    submittedBy: 'system_default', 
    spotifyUrl: '4CcdTUHu1kVVKXH20NIZCo', 
    isLiked: null,
    dateSubmitted: '26/9/2021'
  },
  { id: 4, 
    hasBeenReviewed: false, 
    submittedBy: 'system_default', 
    spotifyUrl: '4CcdTUHu1kVVKXH20NIZCo', 
    isLiked: null,
    dateSubmitted: '26/9/2021'
  },
];

export const submittedTunes = persistStore('submittedtunes', defaultTunes);