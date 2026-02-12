import { HTMLAttributes, ReactNode } from "react"
import styles from "./heading.module.css"

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
	as: "h1" | "h2" | "h3" | "h4"
	color: string
	children: ReactNode
  className?: string 
}

export default function Heading({ as, color, children, className, ...rest }: HeadingProps) {
	const Tag = as
	return (
		<Tag
      {...rest}
			className={`${styles[as]} font-semibold leading-[110%] uppercase ${className ?? ""}`}
			style={{ color: color }}
		>
			{children}
		</Tag>
	)
}
