import Container from "@/components/container/container"
import { getNews } from "@/modules/news/api/getNews"
import { getNewsById } from "@/modules/news/api/getNewsById"
import NewsCard from "@/modules/news/ui/news-card"

export async function generateStaticParams() {
	const posts = await getNews()

	return posts.map(post => ({
		id: String(post.id),
	}))
}

export default async function NewsPage({
	params,
}: {
	params: Promise<{ id: string }>
}) {
	const { id } = await params
	const post = await getNewsById(Number(id))
	if (post.status === "error") return post.data
	const { data } = post
	return (
		<Container>
				<NewsCard
					date={data.date}
					variant='single'
					description={data.description}
					id={data.id}
					image={data.image}
					title={data.title}
					subtitle={data.subtitle}
				/>
		</Container>
	)
}
