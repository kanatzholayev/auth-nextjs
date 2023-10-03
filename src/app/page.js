import { Button } from '@/components/Button/Button';

import Link from 'next/link';

import { LoginModal } from '@/components/LoginModal/LoginModal';
import { RegisterModal } from '@/components/RegisterModal/RegisterModal';

export default Home = ({ searchParams }) => {
	const modal = searchParams?.modal;

	return (
		<div className="px-7">
			<h1 className="text-2xl text-primary mt-11 mb-20 ml-2 font-bold primary">Выберите действие</h1>
			<Link href="/?modal=loginModal">
				<Button theme="orange">Login</Button>
			</Link>
			<Link href="/?modal=registrationsModal">
				<Button theme="blue">Registration</Button>
			</Link>

			{modal === 'loginModal' && <LoginModal />}

			{modal === 'registrationsModal' && <RegisterModal />}
		</div>
	);
};
