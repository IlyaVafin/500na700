"use client"
import { HTMLAttributes, ReactNode } from "react"
import styles from "./button.module.scss"
interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
	children: ReactNode
	color: "white" | "black"
	className?: string
	bgColor?: string
	disabled?: boolean
}
export default function Button({
	children,
	color,
	className,
	bgColor,
	disabled,
	...rest
}: ButtonProps) {
	return (
		<button
			disabled={disabled}
			{...rest}
			style={{
				background: `linear-gradient(${bgColor}, ${bgColor}) padding-box, linear-gradient(to bottom, #fb8627, #f5bef6) border-box`,
				...rest.style,
			}}
			className={`${styles.button}
			
   		${color === "black" ? styles.colorBlack : styles.colorWhite} ${className ?? ""}`}
		>
			{children}
		</button>
	)
}
