import { Suspense } from "react";
import { HeaderTitle } from "@/components/layout/header-title";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import type { NavArea } from "@/config/nav";

export function SiteHeader({ area }: { area: NavArea }) {
  return (
    <header className="sticky top-0 z-10 flex h-14 shrink-0 items-center gap-2 border-b bg-background/80 px-4 backdrop-blur">
      <SidebarTrigger className="-ml-1" />
      <Separator
        orientation="vertical"
        className="mr-2 data-vertical:h-4 data-vertical:self-center"
      />
      <Suspense>
        <HeaderTitle area={area} />
      </Suspense>
    </header>
  );
}
