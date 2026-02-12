import Heading from "@/components/typography/heading/heading"
import { getNews } from "./api/getNews"
import styles from "./news.module.scss"
import Container from "@/components/container/container"
import NewsCard from "./ui/news-card"
export default async function NewsModule() {
	const news = await getNews()
	return (
		<section className={styles.news}>
			<Container>
				<Heading className={styles.title} color='white' as='h1'>
					Новости
				</Heading>
				<div className={styles.newsBlock}>
					{news.map(post => (
						<NewsCard
							date={post.date}
							description={post.description}
							image={post.image}
							title={post.title}
							key={post.id}
						/>
					))}
				</div>
			</Container>
		</section>
	)
}
