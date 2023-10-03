'use client';
import { useState, useEffect } from 'react';

import { useRouter } from 'next/navigation';

import { useToken } from '@/utils/useToken';

import 'react-image-crop/dist/ReactCrop.css';
import { SelectImage } from '@/components/SelectImage/SelectImage';
import { CropImage } from '@/components/CropImage/CropImage';

const UploadPhoto = () => {
	const { push } = useRouter();

	const [imgSrc, setImgSrc] = useState('');
	const [crop, setCrop] = useState();

	const { token } = useToken();

	useEffect(() => {
		if (!token) {
			push('/');
		}
	}, []);

	return (
		<div className="px-7">
			{!!imgSrc ? (
				<CropImage crop={crop} setCrop={setCrop} imgSrc={imgSrc} setImgSrc={setImgSrc} />
			) : (
				<SelectImage setCrop={setCrop} setImgSrc={setImgSrc} />
			)}
		</div>
	);
};

export default UploadPhoto;
