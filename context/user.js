import { createContext, useEffect, useReducer } from 'react';

import { useFetch } from '../hooks/useFetch';
import { usePost } from '../hooks/usePost';
import { inicialState, userReducer } from '../reducer/user';
import { MESSAGE_REMOVE } from '../reducer/actions/common';
import { HTTP } from '../reducer/actions/common';

export const UserContext = createContext({
	userState: inicialState,
	getUser: () => {},
	addPoints: () => {},
	redeemPoints: () => {},
	removeMessage: () => {},
	removeMessageByIndex: () => {},
});

const { Provider } = UserContext;

export const UserProvider = ({ children }) => {
	const [userState, dispatch] = useReducer(userReducer, inicialState);

	const [getData] = useFetch();
	const [postData] = usePost();

	useEffect(() => {
		getUser();
	}, []);

	const getUser = async () => {
		try {
			const userData = await getData('user/me');
			if (!!userData) {
				dispatch({ type: HTTP.FETCH_SUCCESS, payload: userData });
			} else {
				throw Error(userData.message);
			}
		} catch (e) {
			console.log(e);
			dispatch({ type: HTTP.FETCH_ERROR, payload: e });
		}
	};

	const addPoints = async (points) => {
		try {
			dispatch({ type: HTTP.POSTING });
			const userPoints = await postData('user/points', points);
			if (!!userPoints) {
				const message = {
					id: userState.messages.length,
					message: `${userPoints.message} to your account`,
					product: '',
					points: userPoints['New Points'],
					error: false,
				};

				setTimeout(() => {
					dispatch({
						type: HTTP.POST_ADD_COINS_SUCCESS,
						payload: {
							user: userPoints['New Points'],
							messages: message,
						},
					});
				}, 1500);
			} else {
				throw Error('Error adding points');
			}
		} catch (e) {
			console.log(e);
			const message = {
				id: userState.messages.length,
				message: `There was a problem with the transaction`,
				product: '',
				points: '',
				error: true,
			};
			dispatch({ type: HTTP.POST_ERROR, payload: message });
		}
	};

	const redeemPoints = async (obj, pointCost, product) => {
		try {
			dispatch({ type: HTTP.POSTING });

			if (pointCost < userState.user.points) {
				const newPoints = userState.user.points - pointCost;
				const redeemResponse = await postData('redeem', obj);
				if (!!redeemResponse) {
					const message = {
						id: userState.messages.length,
						message: 'redeem successfully',
						product: product,
						points: '',
						error: false,
					};
					setTimeout(() => {
						dispatch({
							type: HTTP.POST_REDEEM_COINS_SUCCESS,
							payload: { user: newPoints, messages: message },
						});
					}, 1500);
				}
			} else {
				throw Error('You do not have enough points');
			}
		} catch (e) {
			console.log(e);
			const message = {
				id: userState.messages.length,
				message: `There was a problem with the transaction`,
				product: '',
				points: '',
				error: true,
			};
			dispatch({ type: HTTP.POST_ERROR, payload: message });
		}
	};

	const removeMessage = () => {
		const newArray = userState.messages.splice(-1, 1);
		dispatch({ type: MESSAGE_REMOVE, payload: newArray });
	};

	const removeMessageById = (id) => {
		const newArray = userState.messages.filter((_, index) => {
			index !== id;
		});
		dispatch({ type: MESSAGE_REMOVE, payload: newArray });
	};

	return (
		<Provider
			value={{
				userState,
				getUser,
				addPoints,
				redeemPoints,
				removeMessage,
				removeMessageById,
			}}
		>
			{children}
		</Provider>
	);
};
