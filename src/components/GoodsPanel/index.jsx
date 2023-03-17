import React, { useEffect, useState } from 'react';
import { getGoodsRequest } from 'actions/commonActions';
import styles from './style.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import uuid from 'react-uuid';

import GoodItem from 'components/GoodItem';

const GoodsPanel = () => {
  const dispatch = useDispatch();
  const [filteredArray, setFilteredArray] = useState([]);
  const goods = useSelector(state => state.common.goodsList);
  const searchFilter = useSelector(state => state.common.goodsFilter);
  const colors = useSelector(state => state.common.goodsColors);
  const sortingDirection = useSelector(state => state.common.sortingDirection);
  const minPriceValue = useSelector(state => state.common.minPriceValue);
  const maxPriceValue = useSelector(state => state.common.maxPriceValue);
  useEffect(() => {
    dispatch(getGoodsRequest());
  }, []);

  useEffect(() => {
    let filteredGoods = [...goods];

    if (searchFilter !== '') {
      filteredGoods = filteredGoods.filter(good => good.category.toLowerCase() === searchFilter.toLowerCase());
    }

    if (colors.length > 0) {
      filteredGoods = filteredGoods.filter(good => typeof good.color === 'string' && colors.includes(good.color));
    }

    if (minPriceValue && maxPriceValue && minPriceValue < maxPriceValue) {
      const filteredArr = filteredGoods.filter(obj => obj.hasOwnProperty('numberPrice'));
      const filteredInRangeArr = filteredArr.filter(obj => obj['numberPrice'] >= minPriceValue && obj['numberPrice'] <= maxPriceValue);
      filteredGoods = filteredInRangeArr.sort((a, b) => a['numberPrice'] - b['numberPrice']);
    }

    if (sortingDirection === 'highPrice') {
      filteredGoods = filteredGoods.sort((a, b) => b['numberPrice'] - a['numberPrice']);
      console.log(filteredGoods);
    } else if (sortingDirection === 'lowPrice') {
      filteredGoods = filteredGoods.sort((a, b) => a['numberPrice'] - b['numberPrice']);
      console.log(filteredGoods);
    } else {
      filteredGoods = filteredGoods.sort((a,b) => b['rating'] - a['rating']);
      console.log(filteredGoods);
    }

    setFilteredArray(filteredGoods);
  }, [searchFilter, goods, colors, sortingDirection, minPriceValue, maxPriceValue]);
  return (
    <div className={styles.goodsPanelWrapper}>
      {filteredArray.map(good =>
        <GoodItem
          key={uuid()}
          category={good.category}
          price={good.price}
          color={good.color}
          rating={good.rating}
        />
      )}
    </div>
  );
};

export default GoodsPanel;
