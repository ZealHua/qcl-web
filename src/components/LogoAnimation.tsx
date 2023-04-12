import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/LogoAnimation.module.css';

const LogoAnimation = () => {
  const [animationFinished, setAnimationFinished] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (animationFinished) {
      router.push('/');
    }
  }, [animationFinished, router]);

  return (
    <div className={styles.container}>
      <img
        src="../logo.svg"
        alt="Logo"
        className={styles.logo}
        onAnimationEnd={() => setAnimationFinished(true)}
      />
    </div>
  );
};

export default LogoAnimation;
