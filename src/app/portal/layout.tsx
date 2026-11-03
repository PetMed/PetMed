import { Suspense } from "react";
import { AppSidebar } from "@/components/layout/app-sidebar";
import { SidebarSkeleton } from "@/components/layout/sidebar-skeleton";
import { SiteHeader } from "@/components/layout/site-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { requireRole } from "@/lib/auth/dal";

async function PortalSidebar() {
  const session = await requireRole("OWNER");
  return <AppSidebar area="portal" session={session} />;
}

export default function PortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <Suspense fallback={<SidebarSkeleton />}>
        <PortalSidebar />
      </Suspense>
      <SidebarInset>
        <SiteHeader area="portal" />
        <main className="flex-1 p-4 md:p-6">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}
