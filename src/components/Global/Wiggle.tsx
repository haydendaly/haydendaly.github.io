import React, { useEffect, useState, useRef } from "react";

/**
 * Types
 */
export interface Wiggle {
  children: JSX.Element;
  angleRange?: number;
  time?: number;
  rotationFreq?: number;
  isRotating: boolean;
}

/**
 * Helper functions
 */
function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Components
 */
const Wiggle = ({
  children,
  angleRange = 60,
  time = 150,
  rotationFreq = 3000,
  isRotating,
}: Wiggle) => {
  const minAngle = -angleRange;
  const maxAngle = angleRange;
  const [angle, setAngle] = useState(0);
  const interval = useRef(null);

  const triggerRotation = async () => {
    setAngle(minAngle);
    await sleep(time);
    setAngle(maxAngle);
    await sleep(time);
    setAngle(0);
  };

  useEffect(() => {
    if (isRotating) {
      // @ts-ignore
      interval.current = setInterval(async () => {
        await triggerRotation();
        await sleep(time * 2);
        await triggerRotation();
      }, rotationFreq);
    } else {
      // @ts-ignore
      clearInterval(interval.current);
    }
    // @ts-ignore
    return () => clearInterval(interval.current);
  }, [isRotating]);

  return (
    <div
      style={{
        transform: `rotate(${angle}deg)`,
        transition: `transform ${time}ms ease`,
      }}
    >
      {children}
    </div>
  );
};

export default Wiggle;
