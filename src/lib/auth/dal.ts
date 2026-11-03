import { forbidden, redirect } from "next/navigation";
import { can, type Permission, type Role } from "@/lib/auth/permissions";
import { getSession } from "@/lib/auth/session";

export async function requireSession() {
  const session = await getSession();
  if (!session) redirect("/login");
  return session;
}

export async function requireRole(...roles: Role[]) {
  const session = await requireSession();
  if (!roles.includes(session.role)) forbidden();
  return session;
}

export async function requirePermission(permission: Permission) {
  const session = await requireSession();
  if (!can(session, permission)) forbidden();
  return session;
}
