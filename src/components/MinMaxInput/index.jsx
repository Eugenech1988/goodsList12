import React from 'react';
import styles from './style.module.scss';
import { useDispatch } from 'react-redux';
import { setMinPriceValue, setMaxPriceValue } from 'actions/commonActions';
import debounce from 'lodash/debounce';

const MinMaxInput = () => {
  const dispatch = useDispatch();
  const onMinChange = debounce((e) => {
    dispatch(setMinPriceValue(Number(e.target.value)));
  }, 300);
  const onMaxChange = debounce((e) => {
    dispatch(setMaxPriceValue(Number(e.target.value)));
  }, 300);

  return (
    <>
      <div className={styles.priceHeader}>
        Price
      </div>
      <div className={styles.minMaxWrapper}>
        <input onChange={onMinChange} maxLength={3} placeholder="min" className={styles.priceInput} type="text"/>
        {' '}
        -
        {' '}
        <input onChange={onMaxChange} maxLength={3} placeholder="max" type="text" className={styles.priceInput}/>
      </div>
    </>
  );
};

export default MinMaxInput;
