import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <motion.div
      className='fixed pointer-events-none z-50'
      animate={{
        x: mousePosition.x - 4,
        y: mousePosition.y - 4,
      }}
      transition={{
        duration: 0,
        type: 'tween',
        scale: {
          duration: 0.1,
        },
      }}
    >
      <motion.div
        className='w-6 h-6 rounded-full border border-blue border-dashed flex items-center justify-center'
        animate={{
          rotate: 360
        }}
        transition={{
          duration: isClicking ? .5 : 2,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        <motion.div
          className='w-3 h-3 bg-blue rounded-full'
          animate={{
            scale: isClicking ? 1.5 : 1,
          }}
          transition={{
            duration: 0.5,
          }}
        ></motion.div>
      </motion.div>
    </motion.div>
  );
};

export default CustomCursor;
