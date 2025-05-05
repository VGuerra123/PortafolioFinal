import { useEffect, useState } from 'react';

const Cursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isActive, setIsActive] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Don't show custom cursor on touch devices
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
    if (isTouchDevice) return;

    setIsVisible(true);
    
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => setIsActive(true);
    const handleMouseUp = () => setIsActive(false);
    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    document.addEventListener('mousemove', updatePosition);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Add active class for interactive elements
    const handleMouseOverInteractive = () => setIsActive(true);
    const handleMouseOutInteractive = () => setIsActive(false);

    const interactiveElements = document.querySelectorAll('a, button, input, textarea, [role="button"]');
    interactiveElements.forEach(element => {
      element.addEventListener('mouseover', handleMouseOverInteractive);
      element.addEventListener('mouseout', handleMouseOutInteractive);
    });

    return () => {
      document.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);

      interactiveElements.forEach(element => {
        element.removeEventListener('mouseover', handleMouseOverInteractive);
        element.removeEventListener('mouseout', handleMouseOutInteractive);
      });
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={`custom-cursor ${isActive ? 'custom-cursor--active' : ''}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    />
  );
};

export default Cursor;