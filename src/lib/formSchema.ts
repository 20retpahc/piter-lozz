import { z } from 'zod';

const productSchema = z.object({
	name: z.string().min(1),
	description: z.string().min(3),
	category: z.number().positive(),
	subCategory: z.string().min(1),
	price: z.number().positive(),
	stock: z.number().nonnegative(),
	images: z
		.instanceof(File, { message: 'Images uploaded must be of type file' })
		.refine((f) => f.size < 500_000, 'Maximum file size is 500KB')
		.array()
});

export default productSchema;
