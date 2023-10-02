import { Header } from '@/components/Header/Header';
import Head from 'next/head';
import './globals.css';
import { Inter } from 'next/font/google';
import { Navbar } from '@/components/Navbar/Navbar';

const inter = Inter({ subsets: ['latin'] });

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
			<body className={inter.className}>
				<Header />
				{children}
				<Navbar />
			</body>
		</html>
	);
}
