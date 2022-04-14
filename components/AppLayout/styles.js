import css from 'styled-jsx/css';

export const globalStyles = css.global`
	* {
		padding: 0;
		margin: 0;
		box-sizing: border-box;
	}
	html,
	body {
		padding: 0;
		margin: 0;
		font-weight: 600;
		background: #fff;
		font-family: 'Montserrat', sans-serif;
		scroll-behavior: smooth;
	}
`;

export default css`
	main {
		width: 1920px;
	}
`;
