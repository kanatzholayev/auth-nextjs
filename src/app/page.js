export default function Home() {
	return (
		<main className="py-20 px-7">
			<h1 className="text-2xl text-primary mt-11 mb-20 ml-2 font-bold primary">Выберите действие</h1>
			<button className="w-full h-16 mb-5 border-none rounded-full bg-gradient-orange shadow-orange-button text-white text-sm font-bold">
				Login
			</button>
			<button className="w-full h-16 border-none rounded-full bg-gradient-purple shadow-purple-button text-white text-sm font-bold">
				Registration
			</button>
		</main>
	);
}
