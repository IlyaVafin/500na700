import Image from "next/image"
import Link from "next/link"
import Button from "../../button/button"
import Container from "../../container/container"
import styles from "./header.module.scss"
export default function Header() {
	return (
		<header className={styles.header}>
			<div className={styles.headerFixed}>
				<Container>
					<div className={styles.headerContent}>
						<Link href="/">
							<Image
								loading='eager'
								src='/logo.svg'
								alt='logotype'
								sizes='100vw'
								width={0}
								height={0}
								className={styles.logo}
							/>
						</Link>
						<Button color='white'>Связаться с нами</Button>
					</div>
				</Container>
			</div>
		</header>
	)
}
