import { categorySchema } from '$lib/formSchema';
import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';

export const load = async () => {
	const form = await superValidate(zod(categorySchema));
	return {
		form
	};
};
