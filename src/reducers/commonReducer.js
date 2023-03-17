import * as types from 'actionTypes/commonActionTypes';

const initialState = {
  goodsFilter: '',
  goodsList: [],
  goodsError: '',
  minPriceValue: null,
  maxPriceValue: null,
  goodsColors: [],
  sortingDirection: '',
};

const commonReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_GOODS_FILTER:
      return {...state, goodsFilter: action.payload};
    case types.GET_GOODS_REQUEST:
      return {...state};
    case types.GET_GOODS_SUCCESS:
      return {...state, goodsList: action.payload};
    case types.GET_GOODS_ERROR:
      return {...state, goodsError: action.error};
    case types.SET_GOODS_COLORS_ARRAY:
      return {...state, goodsColors: action.payload};
    case types.SET_SORTING_DIRECTION:
      return {...state, sortingDirection: action.payload};
    case types.SET_MIN_PRICE_VALUE:
      return {...state, minPriceValue: action.payload};
    case types.SET_MAX_PRICE_VALUE:
      return {...state, maxPriceValue: action.payload};
    default:
      return state;
  }
};

export default commonReducer;
