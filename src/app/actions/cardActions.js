import { ITEM_INC } from '../constants/CardConst';

export function itemInc() {
	console.log(123);
	return {
		type: ITEM_INC,
		payload: '',
	};
}
