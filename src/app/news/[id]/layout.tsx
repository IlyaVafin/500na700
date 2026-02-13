import Footer from "@/components/layout/footer/footer";
import { ReactNode } from "react";

export default function PostLayout({children}: {children: ReactNode}) {
  return (
    <section>
      {children}
      <Footer/>
    </section>
  )
}