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
