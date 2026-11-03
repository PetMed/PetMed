import { cookies } from "next/headers";
import {
  ALL_PERMISSIONS,
  ROLES,
  STAFF_BASE,
  type Role,
  type Session,
} from "@/lib/auth/permissions";

export const ROLE_COOKIE = "petmed-role";

const DEV_USERS: Record<Role, Session> = {
  OWNER: {
    userId: "dev-owner",
    name: "Nimal Perera",
    role: "OWNER",
    permissions: [],
  },
  STAFF: {
    userId: "dev-staff",
    name: "Sanduni Fernando",
    role: "STAFF",
    permissions: [
      ...STAFF_BASE,
      "stock.adjust",
      "expenses.record",
      "reports.operational",
    ],
  },
  DOCTOR: {
    userId: "dev-doctor",
    name: "Dr. Perera",
    role: "DOCTOR",
    permissions: ALL_PERMISSIONS,
  },
};

export function isRole(value: string | undefined): value is Role {
  return ROLES.includes(value as Role);
}

export async function getSession(): Promise<Session | null> {
  const role = (await cookies()).get(ROLE_COOKIE)?.value;
  return isRole(role) ? DEV_USERS[role] : null;
}

export function homeFor(role: Role) {
  return role === "OWNER" ? "/portal" : "/clinic/dashboard";
}
