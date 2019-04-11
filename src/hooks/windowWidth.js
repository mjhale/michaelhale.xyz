import { useEffect, useState } from 'react';

let initialWidth;

if (typeof window !== 'undefined') {
  initialWidth = window.innerWidth;
}

function useWindowWidth() {
  const [width, setWidth] = useState(initialWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  return width;
}

export default useWindowWidth;
