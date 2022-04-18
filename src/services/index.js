import { throttle } from 'lodash';
import { useCallback, useEffect } from 'react';

const handleAspectRatio = ({ idealAspectRatio, resizeThrottleDelayMs, onSizeChanged }) => {
  const handleWindowResize = throttle(() => onSizeChanged(0), resizeThrottleDelayMs);

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);

    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  return useCallback((node) => {
    if (node !== null) {
      const currentWidth = node.getBoundingClientRect().width;
      const newHeight = Math.floor(currentWidth / idealAspectRatio);
      onSizeChanged(newHeight);
    }
  });
};

const mediaService = {
  handleAspectRatio,
};

export {
  mediaService,
};
