import { z } from 'zod';

export const productSchema = z.object({
	name: z.string().min(1),
	description: z.string().min(3),

	// 폼에서 넘어오는 문자열을 숫자로 강제 변환
	category: z.coerce.number().positive('카테고리는 양수여야 합니다.'),

	subCategory: z.string().min(1),

	// 폼에서 넘어오는 문자열을 숫자로 강제 변환
	price: z.coerce.number().positive('가격은 양수여야 합니다.'),

	// 폼에서 넘어오는 문자열을 숫자로 강제 변환
	stock: z.coerce.number().nonnegative('재고는 음수일 수 없습니다.'),

	// File 객체 유효성 검사
	images: z
		.instanceof(File, { message: '업로드된 이미지는 파일 형식이어야 합니다.' })
		.refine((f) => f.size < 500_000, '최대 파일 크기는 500KB입니다.')
		.array() // File 객체의 배열임을 명시
});

export const categorySchema = z.object({
	name: z.string().min(1),
	description: z.string().min(1),
	subCategories: z.array(z.string()).min(1)
});
