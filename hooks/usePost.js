export const usePost = () => {
	const postData = async (endPoint, obj) => {
		try {
			const response = await fetch(
				`${process.env.NEXT_PUBLIC_API_URL}${endPoint}`,
				{
					method: 'POST',
					headers: {
						'Access-Control-Allow-Origin':
							'https://aero-challenge-roykachani.vercel.app',
						'Content-Type': 'application/json',
						Accept: 'application/json',
						Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
					},
					body: JSON.stringify(obj),
				}
			);
			const data = await response.json();
			return data;
		} catch (error) {
			console.log(error);
		}
	};
	return [postData];
};
