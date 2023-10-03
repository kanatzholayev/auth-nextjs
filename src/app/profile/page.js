'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { Button } from '@/components/Button/Button';
import { useToken } from '@/utils/useToken';
import { useEffect } from 'react';

const Profile = () => {
	const { push } = useRouter();

	const { token } = useToken();

	useEffect(() => {
		if (!token) {
			push('/');
		}
	}, []);

	return (
		<div className="px-7">
			<h1 className="text-2xl text-primary mt-11 mb-20 font-bold primary">Привет!</h1>
			<Link href="/profile/uploadPhoto">
				<Button theme="blue">Загрузить аватар</Button>
			</Link>
		</div>
	);
};

export default Profile;
