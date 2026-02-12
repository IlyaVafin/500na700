import { ReactNode } from "react";

export default function Container({children}: {children: ReactNode}) {
  return (
    <div className="max-w-340 mr-auto ml-auto pr-2.5 pl-2.5 min-[1360px]:p-0">
      {children}
    </div>
  )
}