'use client';

import { useEffect, useState } from 'react';

import { Button } from '@/components/Button/Button';

import { LoginModal } from '@/components/LoginModal/LoginModal';
import { RegisterModal } from '@/components/RegisterModal/RegisterModal';
import { useToken } from '@/utils/useToken';
import { useRouter } from 'next/navigation';

export default function Home() {
	const { push } = useRouter();

	const [loginModal, setLoginModal] = useState(false);
	const [registerModal, setRegisterModal] = useState(false);

	const { token } = useToken();

	useEffect(() => {
		if (token) {
			push('/profile');
		}
	}, []);

	return (
		<div className="px-7">
			<h1 className="text-2xl text-primary mt-11 mb-20 ml-2 font-bold primary">Выберите действие</h1>

			<Button theme="orange" onClick={() => setLoginModal(true)}>
				Login
			</Button>

			<Button theme="blue" onClick={() => setRegisterModal(true)}>
				Registration
			</Button>

			{loginModal && <LoginModal setModalState={setLoginModal} />}

			{registerModal && <RegisterModal setModalState={setRegisterModal} />}
		</div>
	);
}
