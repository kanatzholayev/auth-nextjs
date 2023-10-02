'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { Button } from '@/components/Button/Button';
import { getTokenFromCookie } from '@/utils/cookies';
import { useEffect } from 'react';

const Profile = () => {
	const { push } = useRouter();

	useEffect(() => {
		const token = getTokenFromCookie();
		if (!token) {
			push('/');
		}
	}, []);

	return (
		<main className="px-7">
			<h1 className="text-2xl text-primary mt-11 mb-20 font-bold primary">Привет!</h1>
			<Link href="/profile/uploadPhoto">
				<Button theme="blue">Загрузить аватар</Button>
			</Link>
		</main>
	);
};

export default Profile;
