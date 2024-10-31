
import "@/styles/globals.css";
import AdminSidebar from "@/components/AdminSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
        <SidebarProvider>
          <AdminSidebar />
          {/* <SidebarTrigger /> */}
          <div className="flex w-full flex-col">
            <div className="border-b p-5">navbar</div>
            <main className="p-5 px-9">{children}</main>
          </div>
        </SidebarProvider>
  );
}
