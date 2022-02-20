import React from 'react';
import styles from './Card.module.css';

const Card = (props) => {
  const styleClasses = `${styles.card} ${props.className}`;
  return <div className={styleClasses}>{props.children}</div>;
};

export default Card;
