import {
  BarChart3,
  Bell,
  Boxes,
  CalendarDays,
  ClipboardList,
  FileText,
  LayoutDashboard,
  ListOrdered,
  PawPrint,
  ReceiptText,
  ScrollText,
  Settings,
  Stethoscope,
  Syringe,
  UserCog,
  UserRound,
  Users,
  Wallet,
  type LucideIcon,
} from "lucide-react";
import type { Permission, Role } from "@/lib/auth/permissions";

export type NavItem = {
  title: string;
  href: string;
  icon: LucideIcon;
  roles?: Role[];
  permission?: Permission;
};

export type NavGroup = {
  label: string;
  items: NavItem[];
};

export type NavArea = "portal" | "clinic";

export const NAV: Record<NavArea, NavGroup[]> = {
  portal: [
    {
      label: "Overview",
      items: [
        { title: "Dashboard", href: "/portal", icon: LayoutDashboard },
        { title: "My pets", href: "/portal/pets", icon: PawPrint },
        {
          title: "Appointments",
          href: "/portal/appointments",
          icon: CalendarDays,
        },
      ],
    },
    {
      label: "Health",
      items: [
        { title: "Medical records", href: "/portal/records", icon: FileText },
        { title: "Vaccinations", href: "/portal/vaccinations", icon: Syringe },
      ],
    },
    {
      label: "Account",
      items: [
        { title: "Invoices", href: "/portal/invoices", icon: ReceiptText },
        { title: "Notifications", href: "/portal/notifications", icon: Bell },
        { title: "Profile", href: "/portal/profile", icon: UserRound },
      ],
    },
  ],
  clinic: [
    {
      label: "Clinic",
      items: [
        {
          title: "Dashboard",
          href: "/clinic/dashboard",
          icon: LayoutDashboard,
        },
        {
          title: "Queue",
          href: "/clinic/queue",
          icon: ListOrdered,
          permission: "queue.manage",
        },
        {
          title: "Appointments",
          href: "/clinic/appointments",
          icon: CalendarDays,
          permission: "appointments.manage",
        },
      ],
    },
    {
      label: "Patients",
      items: [
        {
          title: "Clients & pets",
          href: "/clinic/patients",
          icon: Users,
          permission: "patients.manage",
        },
        {
          title: "Registrations",
          href: "/clinic/patients/registrations",
          icon: ClipboardList,
          permission: "registrations.approve",
        },
      ],
    },
    {
      label: "Billing",
      items: [
        {
          title: "New invoice",
          href: "/clinic/billing/new",
          icon: Stethoscope,
          permission: "billing.create",
        },
        {
          title: "Invoices",
          href: "/clinic/billing/invoices",
          icon: ReceiptText,
          permission: "billing.create",
        },
        {
          title: "Expenses",
          href: "/clinic/expenses",
          icon: Wallet,
          permission: "expenses.record",
        },
      ],
    },
    {
      label: "Stock",
      items: [
        {
          title: "Inventory",
          href: "/clinic/inventory",
          icon: Boxes,
          permission: "stock.view",
        },
      ],
    },
    {
      label: "Admin",
      items: [
        {
          title: "Reports",
          href: "/clinic/reports",
          icon: BarChart3,
          permission: "reports.operational",
        },
        {
          title: "Staff accounts",
          href: "/clinic/admin/staff",
          icon: UserCog,
          roles: ["DOCTOR"],
        },
        {
          title: "Settings",
          href: "/clinic/admin/settings",
          icon: Settings,
          roles: ["DOCTOR"],
        },
        {
          title: "Audit log",
          href: "/clinic/admin/audit",
          icon: ScrollText,
          roles: ["DOCTOR"],
        },
      ],
    },
  ],
};

export const AREA_HOME: Record<NavArea, string> = {
  portal: "/portal",
  clinic: "/clinic/dashboard",
};

export function findNavItem(area: NavArea, pathname: string) {
  return NAV[area]
    .flatMap((group) => group.items)
    .filter(
      (item) => pathname === item.href || pathname.startsWith(item.href + "/"),
    )
    .sort((a, b) => b.href.length - a.href.length)[0];
}
