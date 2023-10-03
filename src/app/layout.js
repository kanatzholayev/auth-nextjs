import { Header } from '@/components/Header/Header';
import { Navbar } from '@/components/Navbar/Navbar';

import '@/app/globals.css';

export const metadata = {
	title: 'Coinfill',
	description: 'Coinfill',
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className="py-20">
				<Header />
				{children}
				<Navbar />
			</body>
		</html>
	);
}
