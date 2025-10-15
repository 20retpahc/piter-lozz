import { productSchema } from '$lib/formSchema';
import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';

export const load = async () => {
	// 폼 구조를 정의하는 formSchema를 사용
	const form = await superValidate(zod(productSchema));
	return { form };
};
