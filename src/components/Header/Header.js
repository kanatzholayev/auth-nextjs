'use client';

import { useToken } from '@/utils/useToken';

import Image from 'next/image';
import Link from 'next/link';

import { useImage } from '@/utils/useImage';

export const Header = () => {
	const { token } = useToken();

	const { imgSrc } = useImage(token);

	return (
		<header className="absolute top-0 left-0 w-full flex justify-between place-items-end px-7 py-4 ">
			<Link href="/" className="flex place-items-end">
				<Image src="/logo.png" alt="Logo" width={30} height={47} priority className="mr-2" />
				<span className="text-logo mb-1 font-bold">СoinsFill</span>
			</Link>
			<div className="flex place-items-center gap-x-1">
				<a href="#" className="flex justify-center place-items-center w-8 h-8">
					<Image src="/search.svg" alt="Search" width={17} height={17} />
				</a>
				<Link href="/profile" className="flex justify-center place-items-center w-8 h-8">
					<Image src={imgSrc} alt="Profile" width={24} height={24} className="rounded-full" />
				</Link>
			</div>
		</header>
	);
};
