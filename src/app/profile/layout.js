import { Header } from '@/components/Header/Header';
import Head from 'next/head';

import { Navbar } from '@/components/Navbar/Navbar';
import { BreadCrumb } from '@/components/Breadcrumb/Breadcrumb';

export const metadata = {
	title: 'Coinfill',
	description: 'Coinfill',
};

export default function RootLayout({ children }) {
	return (
		<>
			<BreadCrumb
				links={[
					{
						href: '/',
						desc: 'Главная ',
					},
					{
						href: '/',
						desc: 'Настройки аккаунта',
					},
					{
						href: '/',
						desc: 'Загрузка аватара',
					},
				]}
			/>
			{children}
		</>
	);
}
