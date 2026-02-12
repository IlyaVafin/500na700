import Image from "next/image"
import Button from "../button/button"
import Container from "../container/container"
import styles from './header.module.scss'
export default function Header() {
	return (
		<header className={styles.header}>
			<div className={styles.headerFixed}>
				<Container>
					<div className={styles.headerContent}>
						<Image src='/logo.svg' alt='logotype' width={70} height={84} />
						<Button color='white'>Связаться с нами</Button>
					</div>
				</Container>
			</div>
		</header>
	)
}
