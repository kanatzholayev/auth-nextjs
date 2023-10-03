import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/Button/Button';

const maxFileSize = 5 * 1024 * 1024; // 5MB

export const SelectImage = ({ setCrop, setImgSrc }) => {
	const [fileSizeExceeded, setFileSizeExceeded] = useState(false);

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

	return (
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
			{fileSizeExceeded && <div>Warning</div>}
		</>
	);
};
