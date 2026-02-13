"use client"
import Button from "@/components/ui/button/button"
import { useState } from "react"
import Modal from "./ui/modal"

export default function ToggleModal() {
	const [show, setShow] = useState(false)
	return (
		<>
			<Button
				onClick={() => setShow(true)}
				color='white'
				bgColor='var(--color-black)'
			>
				Связаться с нами
			</Button>
			<Modal show={show} setShow={setShow} />
		</>
	)
}
