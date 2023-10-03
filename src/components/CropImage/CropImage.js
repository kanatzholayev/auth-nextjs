import { useState, useRef } from 'react';
import ReactCrop, { centerCrop, makeAspectCrop } from 'react-image-crop';

import { Button } from '@/components/Button/Button';
import { useDebounceEffect } from '@/utils/useDebounceEffect';
import { canvasPreview } from '@/utils/canvasPreview';

import { blobToBase64 } from '@/utils/blobToBase64';
import { apiService } from '@/utils/apiService';

const centerAspectCrop = (mediaWidth, mediaHeight) => {
	return centerCrop(
		makeAspectCrop(
			{
				unit: '%',
				width: 100,
			},
			1,
			mediaWidth,
			mediaHeight,
		),
		mediaWidth,
		mediaHeight,
	);
};

export const CropImage = ({ crop, setCrop, imgSrc, setImgSrc }) => {
	const previewCanvasRef = useRef(null);
	const imgRef = useRef(null);
	const [completedCrop, setCompletedCrop] = useState();

	useDebounceEffect(
		async () => {
			if (completedCrop?.width && completedCrop?.height && imgRef.current && previewCanvasRef.current) {
				canvasPreview(imgRef.current, previewCanvasRef.current, completedCrop);
			}
		},
		100,
		[completedCrop],
	);

	const onImageLoad = e => {
		const { width, height } = e.currentTarget;
		setCrop(centerAspectCrop(width, height));
	};

	const onUpload = async () => {
		if (!previewCanvasRef.current) {
			throw new Error('Crop canvas does not exist');
		}

		previewCanvasRef.current.toBlob(blob => {
			if (!blob) {
				throw new Error('Failed to create blob');
			}
			blobToBase64(blob).then(image =>
				apiService.uploadImage(image, token).then(() => (window.location = '/profile')),
			);
		});
	};

	return (
		<>
			<h1 className="text-2xl text-primary mt-5 mb-9 font-bold primary">Фото для аватарки</h1>
			<div className="flex justify-center w-full max-h-96 rounded-xl bg-gray p-3 mb-5">
				<ReactCrop
					crop={crop}
					onChange={c => setCrop(c)}
					onComplete={c => setCompletedCrop(c)}
					aspect={1}
					circularCrop
				>
					<img ref={imgRef} alt="Avatar" src={imgSrc} onLoad={onImageLoad} />
				</ReactCrop>
			</div>

			<Button theme="blue" onClick={onUpload}>
				Сохранить
			</Button>

			<Button theme="light" onClick={() => setImgSrc('')}>
				Отменить
			</Button>

			{!!completedCrop && <canvas ref={previewCanvasRef} className="hidden" />}
		</>
	);
};
