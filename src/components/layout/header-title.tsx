"use client";

import { usePathname } from "next/navigation";
import { findNavItem, type NavArea } from "@/config/nav";

export function HeaderTitle({ area }: { area: NavArea }) {
  const pathname = usePathname();
  return (
    <span className="text-sm font-medium">
      {findNavItem(area, pathname)?.title ?? "PetMed"}
    </span>
  );
}
