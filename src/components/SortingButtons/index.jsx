import React from 'react';
import styles from './style.module.scss';
import { useDispatch } from 'react-redux';
import { setSortingDirection } from 'actions/commonActions';

const SortingButtons = () => {
  const dispatch = useDispatch();
  const lowHighClick = () => {
    dispatch(setSortingDirection('lowPrice'));
  }
  const highLowClick = () => {
    dispatch(setSortingDirection('highPrice'));
  }
  const popularClick = () => {
    dispatch(setSortingDirection('popular'));
  }
  return (
    <div className={styles.sortingWrapper}>
      <button onClick={lowHighClick} className={styles.sortingButton}>
        Price From Low To High
      </button>
      <button onClick={highLowClick} className={styles.sortingButton}>
        Price From High To Low
      </button>
      <button onClick={popularClick} className={styles.sortingButton}>
        Popular First
      </button>
    </div>
  )
}

export default SortingButtons;
