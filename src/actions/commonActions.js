import * as types from 'actionTypes/commonActionTypes';

export const setGoodsFilter = (payload) => ({type: types.SET_GOODS_FILTER, payload});
export const setGoodsColorsArray = (payload) => ({type: types.SET_GOODS_COLORS_ARRAY, payload});

export const getGoodsRequest = () => ({type: types.GET_GOODS_REQUEST});
export const getGoodsSuccess = (payload) => ({type: types.GET_GOODS_SUCCESS, payload});
export const getGoodsError = (error) => ({type: types.GET_GOODS_ERROR, error});

export const setSortingDirection = (payload) => ({type: types.SET_SORTING_DIRECTION, payload});

export const setMinPriceValue = (payload) => ({type: types.SET_MIN_PRICE_VALUE, payload});
export const setMaxPriceValue = (payload) => ({type: types.SET_MAX_PRICE_VALUE, payload});
