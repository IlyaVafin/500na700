import Image from "next/image"
import Button from "../button/button"
import Container from "../container/container"

export default function Header() {
	return (
		<header className='relative h-29.75 pt-5 pb-3.75 w-full border-b border-b-[#FFFFFF4D]'>
			<div className='fixed top-5 left-0 w-full'>
				<Container>
					<div className='flex items-center justify-between'>
						<Image src='/logo.svg' alt='logotype' width={70} height={84} />
						<Button height={500} width={200} color='white'>Связаться с нами</Button>
					</div>
				</Container>
			</div>
		</header>
	)
}
