import { useState, useEffect } from 'react';

const useWindowDimensions = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    const resizeListener = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };
    window.addEventListener('resize', resizeListener);
    return () => window.removeEventListener('resize', resizeListener);
  }, []);

  return {
    width,
    height,
    // Those values are inspired by bootstrap docs
    small: width <= 576,
    medium: width <= 768,
    large: width <= 1064,
    extraLarge: width <= 1200,
    extraExtraLarge: width > 1200,
  };
};

export default useWindowDimensions;
