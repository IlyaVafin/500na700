import { useEffect, useState } from "react"

export const useIsClient = () => {
	const [isClient, setIsClient] = useState(false)
	useEffect(() => {
		const toggleIsClient = () => setIsClient(true)
		toggleIsClient()
	})
  return isClient
}
