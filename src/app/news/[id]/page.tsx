import Container from "@/components/container/container"
import Heading from "@/components/ui/typography/heading/heading"
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
	if (post.status === "error")
		return (
			<Heading as='h1' style={{ textAlign: "center", marginTop: "40px" }} color='white'>
				{post.data}
			</Heading>
		)
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
