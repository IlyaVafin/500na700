"use client"
import { HTMLAttributes, ReactNode } from "react"

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
	children: ReactNode
	color: "white" | "black"
	width: number
	height: number
}
export default function Button({
	children,
	color,
	width,
	height,
	...rest
}: ButtonProps) {
	return (
		<button
			style={{
				maxWidth: width,
				width: "100%",
				maxHeight: height,
				height: "100%",
			}}
			className={`h-10 p-px rounded-[40px] font-medium leading-[130%] bg-clip-padding bg-linear-to-b from-[#FB8627] to-[#F5BEF6] ${color === "black" ? "text-black" : "text-white"}`}
			{...rest}
		>
			<span className=' flex items-center justify-center bg-black w-full h-full rounded-[40px] hover:bg-transparent duration-300 pt-3 pb-3 pl-5 pr-5'>
				{children}
			</span>
		</button>
	)
}
