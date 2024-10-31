import { cn } from "@/lib/utils"
import "@/styles/globals.css"
import {Poppins} from "next/font/google"

const poppins = Poppins({
    weight : ["300","400","500","600","700","800"],
    subsets :["latin"]
})


export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html className={cn(poppins.className)} lang="en">
        <body>
          {/* Layout UI */}
          <main>{children}</main>
        </body>
      </html>
    )
  }