import productSchema from '$lib/formSchema';
import { superValidate } from 'sveltekit-superforms';
import zod from 'zod';

export const load = async () => {
	const form = await superValidate(zod(productSchema));
	return form;
};
