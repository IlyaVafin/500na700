"use client"
import { HTMLAttributes, ReactNode } from "react"
import styles from "./button.module.scss"
interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
	children: ReactNode
	color: "white" | "black"
	className?: string
}
export default function Button({
	children,
	color,
	className,
	...rest
}: ButtonProps) {
	return (
		<button
			className={`${styles.button}
   		${color === "black" ? styles.colorBlack : styles.colorWhite} ${className ?? ""}`}
			{...rest}
		>
			{children}
		</button>
	)
}
