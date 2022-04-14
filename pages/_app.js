import { UserProvider } from '../context/user';
import AppLayout from '../components/AppLayout';

function MyApp({ Component, pageProps }) {
	return (
		<UserProvider>
			<AppLayout>
				<Component {...pageProps} />
			</AppLayout>
		</UserProvider>
	);
}

export default MyApp;
