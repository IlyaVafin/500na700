import Heading from "@/components/typography/heading/heading"
import Text from "@/components/typography/text/text"

export default function Home() {
	return (
		<div className=''>
			<Heading color='white' as='h1'>
				Новости
			</Heading>
			<Text color='white' variant='caption' as='span'>
				Я согласен (-а) на обработку персональных данных
			</Text>
		</div>
	)
}
