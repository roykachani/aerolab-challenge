export const useFetch = () => {
	const getData = async (endPoint) => {
		try {
			const response = await fetch(
				`${process.env.NEXT_PUBLIC_API_URL}${endPoint}`,
				{
					method: 'GET',
					headers: {
						'Content-Type': 'application/json',
						Accept: 'application/json',
						Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
					},
				}
			);
			const data = await response.json();
			return data;
		} catch (error) {
			console.log(error);
		}
	};
	return [getData];
};
