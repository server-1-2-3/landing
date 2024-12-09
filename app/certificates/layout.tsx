import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { CertificatesSideBar } from "@/components/certificates/CertificatesSideBar";
const { title, description } = siteConfig;

export const metadata: Metadata = {
  title: title,
  description: description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <SidebarProvider className="relative flex justify-center items-center min-h-screen">
      <CertificatesSideBar />
      <main className="relative w-full pt-[50px]">
        <div className="flex justify-start absolute top-5 right-5">
          <SidebarTrigger />
        </div>
        <div>
          <div className="relative flex min-h-screen flex-col">
            <div className="flex-1">{children}</div>
          </div>
        </div>
      </main>
    </SidebarProvider>
  )
}
