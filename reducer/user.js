import { HTTP } from './actions/common';
import { MESSAGE_REMOVE } from './actions/common';

export const inicialState = {
	user: null,
	error: false,
	loading: true,
	messages: [],
};

export function userReducer(state, action) {
	switch (action.type) {
		case HTTP.FETCHING:
			return {
				...state,
				loading: true,
			};
		case HTTP.POSTING:
			return {
				...state,
				loading: true,
			};
		case HTTP.FETCH_SUCCESS:
			return {
				...state,
				loading: false,
				user: action.payload,
			};
		case HTTP.POST_ADD_COINS_SUCCESS:
			return {
				...state,
				loading: false,
				user: { ...state.user, points: action.payload.user },
				messages: [...state.messages, action.payload.messages],
			};
		case HTTP.POST_REDEEM_COINS_SUCCESS:
			return {
				...state,
				loading: false,
				user: { ...state.user, points: action.payload.user },
				messages: [...state.messages, action.payload.messages],
			};
		case HTTP.FETCH_ERROR:
			return {
				...state,
				loading: false,
				error: true,
				messages: [...state.messages, action.payload],
			};
		case HTTP.POST_ERROR:
			return {
				...state,
				loading: false,
				error: true,
				messages: [...state.messages, action.payload],
			};
		case MESSAGE_REMOVE:
			return {
				...state,
				messages: action.payload,
			};

		default:
			return state;
	}
}
