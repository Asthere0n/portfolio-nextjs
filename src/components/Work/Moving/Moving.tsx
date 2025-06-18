import React, { useEffect, useState } from 'react'
import Spain from './Icons/Spain'
import England from './Icons/England'
import Scotland from './Icons/Scotland'
import Plane from './Icons/Plane'
import styles from './Moving.module.css'

interface Props {
    origin: string,
    destination: string,
}

const countryComponents: { [key: string]: React.ComponentType } = {
  Spain,
  England,
  Scotland,
};

export default function Moving(props: Props) {
  const OriginComponent = countryComponents[props.origin];
  const DestinationComponent = countryComponents[props.destination];

  const [shakeOrigin, setShakeOrigin] = useState(false);
  const [shakeDest, setShakeDest] = useState(false);

  // Change this variable to modify the duration of the plane fly animation (in ms)
  const duration = 6000;

  useEffect(() => {
    let originTimeout: NodeJS.Timeout;
    let destTimeout: NodeJS.Timeout;
    let loop: NodeJS.Timeout;

    const animate = () => {
      setShakeOrigin(true);
      originTimeout = setTimeout(() => setShakeOrigin(false), 500);

      destTimeout = setTimeout(() => {
        setShakeDest(true);
        setTimeout(() => {
          setShakeDest(false);
          loop = setTimeout(animate, 2000);
        }, 500);
      }, duration * 0.6);
    };

    animate();

    return () => {
      clearTimeout(originTimeout);
      clearTimeout(destTimeout);
      clearTimeout(loop);
    };
  }, [props.origin, props.destination]);

  return (
    <div className={styles.container}>
      <div className={shakeOrigin ? styles.shake : ''}>
        {OriginComponent && <OriginComponent />}
      </div>
      <div
        className={`${styles.plane} ${styles.animate}`}
        style={{ animationDuration: `${duration}ms` }} // <-- Add this line
      >
        <Plane />
      </div>
      <div className={shakeDest ? styles.shake : ''}>
        {DestinationComponent && <DestinationComponent />}
      </div>
    </div>
  );
}
