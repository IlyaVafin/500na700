import { ReactNode } from "react";

export default function Container({children}: {children: ReactNode}) {
  return (
    <div className="max-w-340 mr-auto ml-auto">
      {children}
    </div>
  )
}