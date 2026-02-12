import { news } from "../data/news"
import { News } from "../types"
export const getNewsById = (id: number) => {
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
		result => result,
		error => error,
	)
}
