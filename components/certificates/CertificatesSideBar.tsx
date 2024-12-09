import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import Link from "next/link";

interface CertificatesGroup {
  name: string
  gid: number;
}

const certificateGroups: CertificatesGroup[] = [
  { name: 'آمازون', gid: 8 },
  { name: 'مایکروسافت', gid: 9 },
  { name: 'لینوکس LPI', gid: 10 },
  { name: 'سیسکو', gid: 11 },
  { name: 'ویم (Veem)', gid: 12 },
  { name: 'پی‌ام‌آی (PMI)', gid: 13 },
  { name: 'کامپتیا', gid: 14 },
  { name: 'گوگل', gid: 15 },
  { name: 'فورتی‌نت', gid: 17 },
  { name: 'اچ‌پی (HP)', gid: 18 },
  { name: 'اسپلانک (Splank)', gid: 19 },
  { name: 'پالو (Palo)', gid: 21 },
  { name: 'جونیپر (Juniper)', gid: 20 },
  { name: 'ایساکا (Isaca)', gid: 22 }
]

export function CertificatesSideBar() {
  return (
    <Sidebar className="absolute" side="right">
      <SidebarHeader>
        <span className="w-full text-center">لیست شرکت‌های ارائه دهنده</span>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {...certificateGroups.map((group, index) => {
                return (
                  <SidebarMenuItem key={index}>
                    <Link href={`/certificates/items/${group.gid}/${group.name}`}>
                      <SidebarMenuButton>
                        {group.name}
                      </SidebarMenuButton>
                    </Link>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  )
}
