import AdminSidebar from "@/components/AdminSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={cn(poppins.className)} lang="en">
      <body>
        <SidebarProvider>
          <AdminSidebar />
          {/* <SidebarTrigger /> */}
          <div className="flex w-full flex-col">
            <div className="border-b p-5">
              navbar
            </div>
            <main className="p-5 px-9">{children}</main>
          </div>
        </SidebarProvider>
      </body>
    </html>
  );
}
