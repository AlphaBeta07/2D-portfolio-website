// Shows the loader once per session.
import { useEffect, useState } from 'react';

let isHydrated = false;

export const usePageLoader = (sessionKey = 'hasShownLoader') => {
  const [loading, setLoading] = useState(() => {
    if (typeof window !== 'undefined' && isHydrated) {
      return !sessionStorage.getItem(sessionKey);
    }
    return true;
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      isHydrated = true;
      const hasShown = sessionStorage.getItem(sessionKey);
      if (hasShown) {
        setLoading(false);
      } else {
        sessionStorage.setItem(sessionKey, 'true');
      }
    }
  }, [sessionKey]);

  const onLoaded = () => setLoading(false);

  return { loading, onLoaded };
};
