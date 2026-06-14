// Shows the loader once per session.
import { useEffect, useState } from 'react';

export const usePageLoader = (sessionKey = 'hasShownLoader') => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if the loader has already been shown in this session
    const hasShown = sessionStorage.getItem(sessionKey);
    if (hasShown) {
      setLoading(false);
    } else {
      sessionStorage.setItem(sessionKey, 'true');
    }
  }, [sessionKey]);

  const onLoaded = () => setLoading(false);

  return { loading, onLoaded };
};
