import React from 'react';
import styles from './styles.module.css';
export { Input } from './components/Input';

export const ExampleComponent = ({ text }) => {
  return <div className={styles.test}>HA-React Component: {text}</div>;
};
