"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { homeFor, isRole, ROLE_COOKIE } from "@/lib/auth/session";

export async function devSignIn(formData: FormData) {
  const role = formData.get("role")?.toString();
  if (!isRole(role)) redirect("/login");
  (await cookies()).set(ROLE_COOKIE, role, {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
  });
  redirect(homeFor(role));
}

export async function signOut() {
  (await cookies()).delete(ROLE_COOKIE);
  redirect("/login");
}
