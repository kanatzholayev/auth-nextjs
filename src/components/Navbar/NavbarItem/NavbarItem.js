import styles from './NavbarItem.module.css';

export const NavbarItem = ({ icon, label, isActive, to }) => {
	return (
		<a
			className={`flex flex-col grow basis-3/12 gap-1 h-full place-items-center justify-center text-xs ${
				isActive ? 'text-active' : ''
			} `}
			href={to}
		>
			<div
				className={`w-7 h-7 flex place-items-center justify-center ${
					isActive ? styles['navbar-icon-active'] : styles['navbar-icon']
				}`}
			>
				{icon}
			</div>
			{label}
		</a>
	);
};
