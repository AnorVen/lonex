import { ITEM_INC } from '../constants/CardConst';

export function loadProducts(products) {
	return {
		type: ITEM_INC,
		payload: products,
	};
}
