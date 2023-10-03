import Link from 'next/link';

export const BreadCrumb = ({ links }) => {
	return (
		<div className="px-7">
			{links.map((item, index) => (
				<div key={`${item.href}${index}`} className="inline text-xxs text-primary opacity-50">
					<Link href={item.href}>{item.desc} </Link>
					{links.length !== index + 1 ? ' / ' : ''}
				</div>
			))}
		</div>
	);
};
