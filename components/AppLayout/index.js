import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../context/user';
import Aeropay from '../Aeropay';
import Loader from '../Loader/Loader';
import Navbar from '../Navbar';

import styles, { globalStyles } from './styles';

const AppLayout = ({ children }) => {
	const { userState } = useContext(UserContext);

	const [isOpen, setIsOpen] = useState(false);

	const handleClick = () => {
		setIsOpen(!isOpen);
	};

	if (userState.user === null)
		return (
			<>
				<Loader />
				<style jsx>{styles}</style>
				<style jsx global>
					{globalStyles}
				</style>
			</>
		);
	return (
		<>
			<Navbar handleClick={handleClick} isOpen={isOpen} />
			{!!isOpen && <Aeropay handleClick={handleClick} isOpen={isOpen} />}
			<main
				onClick={() => {
					!!isOpen && setIsOpen(false);
				}}
			>
				{children}
			</main>
			<style jsx>{styles}</style>
			<style jsx global>
				{globalStyles}
			</style>
		</>
	);
};

export default AppLayout;
