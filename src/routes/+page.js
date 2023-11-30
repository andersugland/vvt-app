import { getFrontPage } from '$lib/utils/sanity';
import { error } from '@sveltejs/kit';

export const load = async () => {
	const frontPage = await getFrontPage();

	if (frontPage) {
		return {
			frontPage
		};
	}

	throw error(404, 'Not found');
};
