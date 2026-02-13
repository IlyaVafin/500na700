import { news } from "../data/news"
import { News } from "../types"
export const getNewsById = (
	id: number,
): Promise<
	{ status: "success"; data: News } | { status: "error"; data: string }
> => {
	const promise = new Promise<News>((resolve, reject) => {
		const post = news.find(p => p.id === id)
		setTimeout(() => {
			if (!post) {
				reject("Новость не найдена")
				return
			}
			resolve(post)
		}, 1000)
	})
	return promise.then(
		result => ({ data: result, status: "success" }),
		err => ({ status: "error", data: err }),
	)
}
