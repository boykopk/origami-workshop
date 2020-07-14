import React from 'react';
import Header from './components/header';
import styles from './app.module.css';

const app = () => {
  return (
    <div className={styles.app}>
      <Header />
    </div>
  );
}

export default app;
