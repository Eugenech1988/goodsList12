import React from 'react';
import styles from './style.module.scss';
import SearchIcon from 'assets/search.svg';
import debounce from 'lodash/debounce';
import { useDispatch } from 'react-redux';
import { setGoodsFilter } from 'actions/commonActions';

const SearchInput = () => {
  const dispatch = useDispatch();
  const setGoodsFilterValue = debounce((e) => {
    dispatch(setGoodsFilter(e.target.value));
  }, 300)
  return (
    <div className={styles.searchWrapper}>
      <img className={styles.searchIcon} src={SearchIcon} alt=""/>
      <input placeholder='Search' className={styles.searchInput} onChange={setGoodsFilterValue}/>
    </div>
  )
}

export default SearchInput;
