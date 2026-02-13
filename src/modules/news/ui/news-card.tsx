import Heading from "@/components/typography/heading/heading"
import Text from "@/components/typography/text/text"
import Image from "next/image"
import styles from "../news.module.scss"
import { News } from "../types"
import Link from "next/link"
export default function NewsCard({
	id,
	image,
	title,
	description,
	date,
	variant,
	subtitle,
}: News & { variant: "single" | "muplitple" }) {
	return (
		<>
			{variant === "muplitple" && (
				<article>
					<Link href={`/news/${id}`}>
						<Image
							className={styles.newsImage}
							src={image}
							alt=''
							sizes='100vw'
							width={0}
							height={0}
							priority
						/>
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
					</Link>
				</article>
			)}
			{variant === "single" && (
				<article className={styles.singlePost}>
					<Image
						src={image}
						alt=''
						sizes='100vw'
						width={0}
						height={0}
						className={styles.newsImage}
					/>
					<div className={styles.postText}>
						<div className={styles.postTitle}>
							<Heading color='white' as='h1'>
								{title}
							</Heading>
							<Text className={styles.date} color='#ffffff80' as='p'>
								{date}
							</Text>
						</div>
						<div className={styles.mainText}>
							<Heading className={styles.subtitle} color='white' as='h3'>
								{subtitle}
							</Heading>
							{!Array.isArray(description) ? (
								<Text color='white' as='p'>
									{description}
								</Text>
							) : (
								<>
									{description.map((paragraph, i) => (
										<Text color='white' key={i} as='p'>
											{paragraph} <br /> <br />
										</Text>
									))}
								</>
							)}
						</div>
					</div>
				</article>
			)}
		</>
	)
}
