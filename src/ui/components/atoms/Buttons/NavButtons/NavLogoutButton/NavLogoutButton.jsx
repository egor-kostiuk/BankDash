import { useState, useCallback, useRef } from 'react';
import './NavLogoutButton.css';

export const NavLogoutButton = ({ label, onClick }) => {
  const [clickPosition, setClickPosition] = useState({ x: '50%', y: '50%' });
  const [isActive, setIsActive] = useState(false);
  const buttonRef = useRef(null);

  const handleMouseDown = useCallback((event) => {
    if (buttonRef.current) {
      const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
      const x = ((event.clientX - left) / width) * 100;
      const y = ((event.clientY - top) / height) * 100;
      setClickPosition({ x: `${x}%`, y: `${y}%` });
      setIsActive(true);
    }
  }, []);

  const handleMouseUpOrLeave = () => setIsActive(false);

  return (
    <button
      ref={buttonRef}
      className={`logout-button ${isActive ? 'active' : ''}`}
      onClick={onClick}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUpOrLeave}
      onMouseLeave={handleMouseUpOrLeave}
      style={{ '--x': clickPosition.x, '--y': clickPosition.y }} /*TODO fix not assignable to type CSSProperties | undefined*/
    >
      {label}
    </button>
  );
};