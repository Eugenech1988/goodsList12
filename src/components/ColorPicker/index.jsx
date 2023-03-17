import React, { useEffect, useState } from 'react';
import styles from './style.module.scss';
import { colors } from 'mocks/colors';
import { useDispatch } from 'react-redux';
import { setGoodsColorsArray } from 'actions/commonActions';

const ColorPicker = () => {
  const dispatch = useDispatch();
  const [filteredColors, setFilteredColors] = useState([]);
  const handleCheck = (e) => {
    if (e.target.classList.contains('colorText')) {
      const innerHTML = e.target.innerHTML;
      if (filteredColors.find(item => item === innerHTML)) {
        setFilteredColors(filteredColors.filter((element) => element !== innerHTML));
      } else {
        setFilteredColors(filteredColors.concat(innerHTML));
      }
    }
  };

  useEffect(() => {
    dispatch(setGoodsColorsArray(filteredColors))
  }, [dispatch, filteredColors]);
  return (
    <>
      <div className={styles.colorHeader}>
        Color
      </div>
      <div className={styles.colorsWrapper}>
        {
          colors.map((color, index) =>
            <label key={index} onClick={handleCheck} className={styles.colorLabel}>
              <span className='colorText'>{color}</span>
              <input className={styles.colorCheck} type="checkbox"/>
            </label>
          )}
      </div>
    </>
  );
};

export default ColorPicker;
