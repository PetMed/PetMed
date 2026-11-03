import { Suspense } from "react";
import { AppSidebar } from "@/components/layout/app-sidebar";
import { SidebarSkeleton } from "@/components/layout/sidebar-skeleton";
import { SiteHeader } from "@/components/layout/site-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { requireRole } from "@/lib/auth/dal";

async function ClinicSidebar() {
  const session = await requireRole("STAFF", "DOCTOR");
  return <AppSidebar area="clinic" session={session} />;
}

export default function ClinicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <Suspense fallback={<SidebarSkeleton />}>
        <ClinicSidebar />
      </Suspense>
      <SidebarInset>
        <SiteHeader area="clinic" />
        <main className="flex-1 p-4 md:p-6">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}
