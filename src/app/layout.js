import { Header } from '@/components/Header/Header';
import Head from 'next/head';

import '@/app/globals.css';

import { Navbar } from '@/components/Navbar/Navbar';

export const metadata = {
	title: 'Coinfill',
	description: 'Coinfill',
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<Head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
				<link
					href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<body className="py-20">
				<Header />
				{children}
				<Navbar />
			</body>
		</html>
	);
}
