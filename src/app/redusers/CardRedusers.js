import * as CardConst from '../constants/CardConst';
import tov1 from '../../imgs/tov1.jpg';
import tov2 from '../../imgs/tov2.jpg';
import tov3 from '../../imgs/tov3.jpg';
import tov4 from '../../imgs/tov3.jpg';

const productsList = [
	{
		id: 1,
		title: 'Платье-миди с расклешенной юбкой',
		img: tov1,
		price: 2450,
		code: '82039-11',
		size: '44',
		color: 'синий',
		quantity: 1,
	},
	{
		id: 2,
		title: 'Туфли женские украшенные кружевными вставками',
		img: tov2,
		price: 2450,
		code: '13524-01',
		size: 38,
		color: 'черный',
		quantity: 1,
	},
	{
		id: 3,
		title: 'Платье-миди',
		img: tov3,
		price: 2450,
		code: '75039',
		size: 44,
		color: 'белый',
		quantity: 1,
	},
	{
		id: 4,
		title: 'Платье-миди',
		img: tov4,
		price: 2450,
		code: '75039',
		size: 46,
		color: 'белый',
		quantity: 1,
	},
];

export const products = [];

export const cardReduser = (state = { products, is_fetching: false }, action) => {
	switch (action.type) {
		case CardConst.FETCH_CARD_PENDING: {
			return (state = {
				...state,
				//is_fetching: true
			});
		}
		case CardConst.FETCH_CARD_FULFILLED: {
			return (state = {
				...state,
				//       is_fetching: false,
				products: action.payload.data,
			});
		}
		case CardConst.FETCH_CARD_REJECTED: {
			return (state = {
				...state,
				//    is_fetching: false,
				error_message: action.payload.message,
			});
		}
		case CardConst.ITEM_DEL: {
			return (state = {
				...state,
				//       is_fetching: false,
				products: action.payload.data,
			});
		}
		case CardConst.ITEM_INC: {
			console.log(action);
			return (state = {
				...state,
				products: productsList,
			});
		}
		case CardConst.ITEM_DEC: {
			return (state = {
				...state,
				//        is_fetching: false,
				products: action.payload,
			});
		}

		default:
			console.log('default card reduser');
			return state;
	}
};
