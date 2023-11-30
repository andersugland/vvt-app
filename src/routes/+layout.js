import { getContactInformation, getHeader, getFooter } from '../lib/utils/sanity';
import { error } from '@sveltejs/kit';

export const load = async () => {
	const header = await getHeader();
	const footer = await getFooter();
	const contactInformation = await getContactInformation();

	if ((header, contactInformation, footer)) {
		return {
			header,
			contactInformation,
			footer
		};
	}

	throw error(404, 'Not found');
};
