import { ITEM_INC } from '../constants/CardConst';

export function itemInc(products) {
	return {
		type: ITEM_INC,
		payload: products,
	};
}
