'use client';

import { useState } from 'react';
import Image from 'next/image';

import { Modal } from '@/components/Modal/Modal';
import { Button } from '@/components/Button/Button';
import { apiService } from '@/utils/apiService';
import { useToken } from '@/utils/useToken';

export const RegisterModal = ({ setModalState }) => {
	const [formData, setFormData] = useState({
		email: '',
		password: '',
		password2: '',
	});
	const [agreement, setAgreement] = useState(false);
	const [errors, setErrors] = useState({});

	const { setToken } = useToken();

	const handleInput = e => {
		const fieldName = e.target.name;
		const fieldValue = e.target.value;

		setFormData(prevState => ({
			...prevState,
			[fieldName]: fieldValue,
		}));
	};

	const onRegister = async event => {
		event.preventDefault();

		let errors = {};

		if (!formData.email) {
			errors.email = 'Email is required!';
		} else if (!/\S+@\S+\.\S+/.test(formData.email)) {
			errors.email = 'Email is invalid!';
		}

		if (!formData.password) {
			errors.password = 'Password is required!';
		} else if (formData.password.length < 5) {
			errors.password = 'Password must be at least 5 characters!';
		}

		if (formData.password !== formData.password2) {
			errors.password = 'Passwords must match!';
		}

		if (!agreement) {
			errors.agreement = 'Confirm agreement!';
		}

		setErrors(errors);

		if (Object.keys(errors).length === 0) {
			try {
				const response = await apiService.register({ email: formData.email, password: formData.password });
				if (response.ok) {
					setToken(response.token);
					setErrors({ ...errors, register: undefined });
					window.location = '/profile';
				} else {
					setErrors({ register: response.errors });
				}
			} catch (e) {
				console.log(e);
			}
		}
	};

	return (
		<Modal title="Регистрация" setModalState={setModalState}>
			<div className="px-3">
				<form onSubmit={onRegister}>
					<div className="flex flex-col place-items-start gap-2 mb-5">
						<label className="text-sm text-white font-bold" htmlFor="phone">
							Ваш email
						</label>
						<div className="relative w-full">
							<Image
								className="absolute top-1/2 left-5 -translate-y-1/2"
								src="/phone.svg"
								alt="Phone"
								width={18}
								height={18}
							/>
							<input
								className="w-full h-12 rounded-3xl text-sm text-primary pl-14 outline-none"
								placeholder=""
								type="text"
								onChange={handleInput}
								value={formData.email}
								name="email"
							/>
						</div>
						{errors.email && <p className="text-xs font-medium text-red-400">{errors.email}</p>}
					</div>
					<div className="flex flex-col place-items-start gap-2 mb-5">
						<label className="text-sm text-white font-bold" htmlFor="phone">
							Пароль
						</label>
						<div className="relative w-full">
							<Image
								className="absolute top-1/2 left-5 -translate-y-1/2"
								src="/password.svg"
								alt="Password"
								width={16}
								height={21}
							/>
							<input
								className="w-full h-12 rounded-3xl text-sm text-primary pl-14 outline-none"
								placeholder=""
								type="password"
								onChange={handleInput}
								value={formData.password}
								name="password"
							/>
						</div>
					</div>
					<div className="flex flex-col place-items-start gap-2 mb-6">
						<label className="text-sm text-white font-bold" htmlFor="phone">
							Повторите пароль
						</label>
						<div className="relative w-full">
							<Image
								className="absolute top-1/2 left-5 -translate-y-1/2"
								src="/password.svg"
								alt="Password"
								width={16}
								height={21}
							/>
							<input
								className="w-full h-12 rounded-3xl text-sm text-primary pl-14 outline-none"
								placeholder=""
								type="password"
								onChange={handleInput}
								value={formData.password2}
								name="password2"
							/>
						</div>
						{errors.password && <p className="text-xs font-medium text-red-400">{errors.password}</p>}
					</div>
					<div className="flex gap-4 place-items-start mt-7">
						<input
							className="mt-.5"
							type="checkbox"
							id="agreement"
							name="agreement"
							onChange={e => setAgreement(e.target.checked)}
							checked={agreement}
						/>
						<label className="text-xs text-white" htmlFor="agreement">
							Нажимая кнопку, вы подтверждаете, что ознакомились и соглашаетесь с{' '}
							<a className="underline" href="#">
								Условиями Соглашения!
							</a>{' '}
							Правилами и политикой конфиденциальности компании
						</label>
					</div>
					{errors.agreement && <p className="text-xs font-medium text-red-400">{errors.agreement}</p>}
					<Button theme="orange" type="submit" className="mt-6">
						Регистрация
					</Button>
					{errors.register && <p className="text-xs font-medium text-red-400">{errors.register}</p>}
				</form>
			</div>
		</Modal>
	);
};
