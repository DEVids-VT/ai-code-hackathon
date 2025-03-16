import { useMemo } from 'react';

export const useOrigin = () => {
  return useMemo(() => {
    if (typeof window !== 'undefined') {
      return window.location.origin;
    }
    return ''; // or some default value
  }, []);
};
