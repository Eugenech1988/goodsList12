import * as endPoints from './apiUrls';
import axios from 'axios';

export const goodsRequestApi = () => axios.get(`${endPoints.BASE_URL}${endPoints.GOODS_URL}`).then(res => res.data);
