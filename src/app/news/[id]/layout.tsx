import Footer from "@/components/layout/footer/footer";
import { ReactNode } from "react";

export default function PostLayout({children}: {children: ReactNode}) {
  return (
    <section style={{minHeight: "100vh", display: "flex", flexDirection: "column"}}>
      <div style={{flex: "1"}}>
        {children}
      </div>
      <Footer/>
    </section>
  )
}