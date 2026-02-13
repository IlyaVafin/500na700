"use client"

import { ReactNode } from "react"
import { createPortal } from "react-dom"

export default function Portal({
	children,
	container,
}: {
	children: ReactNode
	container: DocumentFragment | Element
}) {
	return <>{createPortal(children, container)}</>
}
