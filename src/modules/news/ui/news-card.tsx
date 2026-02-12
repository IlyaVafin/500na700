import Heading from "@/components/typography/heading/heading"
import Text from "@/components/typography/text/text"
import Image from "next/image"
import { News } from "../types"
import styles from '../news.module.scss'
export default function NewsCard({
	image,
	title,
	description,
	date,
}: Omit<News, "id">) {
	return (
		<article>
			<Image className={styles.newsImage} src={image} alt='' sizes="100vw" width={0} height={0} />
			<div className={styles.cardText}>
				<Heading color='white' as='h3'>
					{title}
				</Heading>
				<Text
					style={{ margin: "10px 0 20px 0" }}
					color='rgba(255, 255, 255, 0.5)'
					as='p'
				>
					{description}
				</Text>
				<Text color='white' variant='text' as='p'>
					{date}
				</Text>
			</div>
		</article>
	)
}
