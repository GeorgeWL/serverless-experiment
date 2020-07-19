import React from 'react';
import styles from './loader.module.scss';
const Loader = ({ }) => (
  <div className={styles.outer}>
    <div className={styles.dot} />
    <div className={styles.dot} />
    <div className={styles.dot} />
  </div>
);
export default Loader;
