import useSWR from 'swr';

export const useImage = token => {
	const fetcher = url =>
		fetch(`${url}/account/image`, {
			headers: {
				'Token-Tt': token,
				'Content-Type': `application/json`,
			},
			credentials: `same-origin`,
			method: `GET`,
		}).then(res => res.json());

	const { data, error, isLoading } = useSWR('https://test-task.test211.workers.dev', fetcher);

	return {
		imgSrc: data?.ok ? data.image : '/profile.svg',
		error,
		isLoading,
	};
};
