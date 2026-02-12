import { news } from "../data/news"
import { News } from "../types"
export const getNews = () => {
	const promise = new Promise<News[]>((resolve) => {
		setTimeout(() => {
			resolve(news)
		}, 1000)
	})
	return promise.then(value => value)
}
