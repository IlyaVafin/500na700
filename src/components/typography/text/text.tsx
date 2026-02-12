import { HTMLAttributes, ReactNode } from "react"
import styles from "./text.module.scss"
interface TextProps extends HTMLAttributes<HTMLElement> {
	children: ReactNode
	as: "span" | "p" | "div"
	color?: string
	variant: "text" | "caption"
	className?: string
}
export default function Text({
	children,
	className,
	color,
	as,
	variant,
	...rest
}: TextProps) {
	const Tag = as
	return (
		<Tag
			className={`${className ?? ""} ${variant === "caption" ? styles.caption : styles.text}`}
			{...rest}
			style={{ color: color }}
		>
			{children}
		</Tag>
	)
}
