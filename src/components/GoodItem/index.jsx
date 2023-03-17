import React from 'react';
import noImageIcon from 'assets/no-image.svg';
import styles from './style.module.scss';

const GoodItem = (props) => {
  const {
    imageUrl,
    category,
    price,
    color,
    rating
  } = props;
  return (
    <div className={styles.goodItemWrapper}>
      {
        imageUrl ? <img src={imageUrl} alt=""/> :
          <div className={styles.noImage}>
            <img src={noImageIcon} className={styles.noImageIcon} alt="No image available"/>
          </div>
      }
      <div className={styles.textWrapper}>
        <h3 className={styles.category}>
          {category}
        </h3>
        <p className={styles.props}>
          <b className={styles.popsType}>Color</b>{' '}{color}
        </p>
        <p className={styles.props}>
          <b className={styles.popsType}>Price</b>{' '}{price}
        </p>
        <p className={styles.props}>
          <b className={styles.popsType}>Rating</b>{' '}{rating}
        </p>
      </div>
    </div>
  );
};

export default GoodItem;
