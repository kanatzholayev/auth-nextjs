export const Button = ({ children, theme, type = 'button', className = '', onClick }) => {
	const getClassNames = () => {
		switch (theme) {
			case 'orange':
				return 'bg-gradient-orange shadow-orange-button text-white';
			case 'blue':
				return 'bg-gradient-blue shadow-blue-button text-white';
			case 'light':
				return 'bg-gradient-light shadow-light-button text-primary';
			default:
				return '';
		}
	};

	return (
		<button
			type={type}
			className={`w-full h-16 mb-5 flex justify-center place-items-center relative border-none rounded-full  text-sm font-bold ${getClassNames()} ${className}`}
			onClick={onClick}
		>
			{children}
		</button>
	);
};
