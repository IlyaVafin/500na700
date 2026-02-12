import { HTMLAttributes, ReactNode } from "react"

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
			className={`${className ?? ""} ${variant === "caption" ? "uppercase leading-[130%] text-[12px]" : ""}`}
			{...rest}
			style={{ color: color }}
		>
			{children}
		</Tag>
	)
}
