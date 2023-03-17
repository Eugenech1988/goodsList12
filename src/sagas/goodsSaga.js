import * as actions from 'actions/commonActions';
import * as types from 'actionTypes/commonActionTypes';
import { goodsRequestApi } from 'api';
import { call, put, takeLatest } from 'redux-saga/effects';


function* getGoods() {
  try {
    const response = yield call(goodsRequestApi);
    yield put(actions.getGoodsSuccess(response));
  } catch (error) {
    yield put(actions.getGoodsError(error));
  }
}

export default [
  takeLatest(types.GET_GOODS_REQUEST, getGoods),
];
