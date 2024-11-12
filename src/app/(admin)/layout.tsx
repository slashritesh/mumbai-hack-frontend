
import "@/styles/globals.css";
import AdminSidebar from "@/components/admin/AdminSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import AdminNavbar from "@/components/admin/AdminNavbar";



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
        <SidebarProvider>
          <AdminSidebar />
          <div className="flex w-full flex-col">
            <AdminNavbar />
            <main className="p-5 px-9">{children}</main>
          </div>
        </SidebarProvider>
  );
}
