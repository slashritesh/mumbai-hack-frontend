import React from "react";
import "@/styles/globals.css";
import {
  Settings,
  Database,
  FolderKanban,
  ChartArea,
  Plus,
  Building2,
} from "lucide-react";

import Link from "next/link";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "./ui/sidebar";

type SingleSideBtnProps = {
  data: {
    link: string;
    name: string;
    Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  };
};

const companyNav = [
  { name: "Dashboard", Icon: ChartArea, link: "/admin" },
  { name: "Projects", Icon: FolderKanban, link: "/admin/projects" },
  { name: "Employees", Icon: Database, link: "/admin/employee" },
  { name: "Settings", Icon: Settings, link: "/admin/settings" },
];

const AdminSidebar = () => {
  return (
    <Sidebar>
      <SidebarHeader className="px-5 border-b py-2">
        <div>
          <div className="flex gap-3">
          
          <h1 className="text-lg font-semibold">
            blue<span className="text-blue-700">Circle</span>.
          </h1>
          </div>
          <p className="text-sm text-slate-500">for organization</p>
        </div>
      </SidebarHeader>
      <SidebarContent className="">
        <SidebarGroup>
          <SidebarGroupLabel className="text-sm">Company</SidebarGroupLabel>
          <SidebarGroupContent className="p-3 flex gap-3 text-sm rounded-lg font-medium bg-blue-100">
            <Building2 size={18} />
            <h2>Slash Ritesh Pvt. ltd.</h2>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel className="text-sm">
            Applications
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {companyNav.map((data, index) => {
                return <SingleSideBtn data={data} key={index} />;
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel className="text-sm">Departments</SidebarGroupLabel>
          <SidebarGroupAction>
            <Plus />
          </SidebarGroupAction>
          <SidebarGroupContent>
            <SidebarMenu>
              <DepartmentItem />
              <DepartmentItem />
              <DepartmentItem />
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default AdminSidebar;

const DepartmentItem = () => {
  return (
    <SidebarMenuItem>
      <div className="flex gap-2 p-2">
        <div className="bg-blue-600 rounded-sm h-5 w-5"></div>
        <h2 className="truncate">Marketing Sales</h2>
      </div>
    </SidebarMenuItem>
  );
};

const SingleSideBtn = ({ data }: SingleSideBtnProps) => {
  const { Icon, name, link } = data;
  return (
    <SidebarMenuItem>
      <SidebarMenuButton asChild>
        <div>
          <Icon />
          <Link className="text-sm font-medium" href={link}>
            {name}
          </Link>
        </div>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
};
