'use client';
import { useState, useRef } from 'react';

import { Button } from '@/components/Button/Button';
import { BreadCrumb } from '@/components/Breadcrumb/Breadcrumb';
import { useDebounceEffect } from '@/utils/useDebounceEffect';
import { canvasPreview } from './canvasPreview';
import Image from 'next/image';
import ReactCrop, { centerCrop, makeAspectCrop } from 'react-image-crop';

import 'react-image-crop/dist/ReactCrop.css';
import { blobToBase64 } from '@/utils/blobToBase64';
import { apiService } from '@/utils/apiService';
import { getTokenFromCookie } from '@/utils/cookies';

function centerAspectCrop(mediaWidth, mediaHeight, aspect) {
	return centerCrop(
		makeAspectCrop(
			{
				unit: '%',
				width: 100,
			},
			aspect,
			mediaWidth,
			mediaHeight,
		),
		mediaWidth,
		mediaHeight,
	);
}

const maxFileSize = 5 * 1024 * 1024; // 5MB

const UploadPhoto = () => {
	const previewCanvasRef = useRef(null);
	const imgRef = useRef(null);
	const [imgSrc, setImgSrc] = useState('');
	const [crop, setCrop] = useState();
	const [fileSizeExceeded, setFileSizeExceeded] = useState(false);
	const [aspect, setAspect] = useState(1 / 1);
	const [completedCrop, setCompletedCrop] = useState();

	useDebounceEffect(
		async () => {
			if (completedCrop?.width && completedCrop?.height && imgRef.current && previewCanvasRef.current) {
				// We use canvasPreview as it's much faster than imgPreview.
				canvasPreview(imgRef.current, previewCanvasRef.current, completedCrop);
			}
		},
		100,
		[completedCrop],
	);

	const onSelectFile = e => {
		if (e.target.files && e.target.files.length > 0) {
			if (e.target.files[0].size > maxFileSize) {
				setFileSizeExceeded(true);
				return;
			}
			setFileSizeExceeded(false);
			setCrop(undefined);
			const reader = new FileReader();
			reader.addEventListener('load', () => setImgSrc(reader.result?.toString() || ''));
			reader.readAsDataURL(e.target.files[0]);
		}
	};

	const onImageLoad = e => {
		if (aspect) {
			const { width, height } = e.currentTarget;
			setCrop(centerAspectCrop(width, height, aspect));
		}
	};

	const onUpload = async () => {
		if (!previewCanvasRef.current) {
			throw new Error('Crop canvas does not exist');
		}

		previewCanvasRef.current.toBlob(blob => {
			if (!blob) {
				throw new Error('Failed to create blob');
			}
			blobToBase64(blob).then(image => apiService.uploadImage(image, getTokenFromCookie()));
		});
	};

	return (
		<main className="py-5 px-7">
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

			{!!imgSrc ? (
				<>
					<h1 className="text-2xl text-primary mt-5 mb-9 font-bold primary">Фото для аватарки</h1>
					<div className="flex w-full max-h-96 rounded-xl bg-gray p-3">
						<ReactCrop
							crop={crop}
							onChange={c => setCrop(c)}
							onComplete={c => setCompletedCrop(c)}
							aspect={aspect}
							circularCrop
						>
							<img ref={imgRef} alt="Avatar" src={imgSrc} onLoad={onImageLoad} />
						</ReactCrop>
					</div>
					{fileSizeExceeded && <div>Warning</div>}

					<Button theme="blue" onClick={onUpload}>
						Сохранить
					</Button>

					<Button theme="light" onClick={() => setImgSrc('')}>
						Отменить
					</Button>

					{!!completedCrop && (
						<canvas
							ref={previewCanvasRef}
							style={{
								border: '1px solid black',
								objectFit: 'contain',
								width: completedCrop.width,
								height: completedCrop.height,
							}}
						/>
					)}
				</>
			) : (
				<>
					<h1 className="text-2xl text-primary mt-5 mb-9 font-bold primary">Загрузка аватара</h1>
					<p className="text-sm text-primary mb-11">
						Загрузите файл размером до 5Мб
						<br />
						По формату: JPG, PNG, GIF
					</p>
					<label htmlFor="upload-file" className="cursor-pointer">
						<Button theme="blue" className="pointer-events-none">
							<span className="flex -ml-8">
								<Image src="/upload.svg" width={15} height={18} alt="Upload" className="mr-4" />
								Выбрать файл
							</span>
						</Button>
					</label>
					<input
						type="file"
						accept="image/gif, image/jpeg, image/png"
						id="upload-file"
						onChange={onSelectFile}
						hidden
					/>
				</>
			)}
		</main>
	);
};

export default UploadPhoto;
