import React from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const RouteTitle = () => {
  const location = useLocation();

  useEffect(() => {
    const routeTitles = {
      '/': 'Videos',
      '/photos': 'Photos',
      '/originals': 'Originals',
      '/getvrplayer': 'Get VR Player',
      '/premium': 'Premium',
      '/myfavourites': 'My Favourites',
      '/mysubscriptions': 'My Subscriptions',
      '/publicplaylists': 'Public Playlists',
    };

    const title = routeTitles[location.pathname] || 'DeoVR';
    document.title = title;
  }, [location]);

  return null;
};
export default RouteTitle;