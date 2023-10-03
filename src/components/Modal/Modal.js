import Image from 'next/image';

export const Modal = ({ title, setModalState, children }) => {
	return (
		<div className="fixed top-0 left-0 w-screen h-screen bg-offset z-10">
			<div className="absolute top-12 left-1/2 -translate-x-1/2 w-11/12 rounded-35 bg-gradient-modal max-w-md">
				<button
					type="button"
					onClick={() => setModalState(false)}
					className="absolute flex justify-center place-items-center -top-2 -right-2 w-10 h-10 rounded-full bg-close"
				>
					<Image src="/close.svg" alt="Close" width={15} height={15} />
				</button>
				<div className="bg-[url('../../public/modal-bg.png')] bg-center bg-no-repeat bg-cover bg-[length:90%] py-12 px-7">
					<h2 className="text-center text-white font-bold text-2xl mb-14 mt-5">{title}</h2>
					{children}
				</div>
			</div>
		</div>
	);
};
