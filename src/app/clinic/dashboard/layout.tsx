import { getSession } from "@/lib/auth/session";

export default async function DashboardLayout({
  doctor,
  staff,
}: {
  doctor: React.ReactNode;
  staff: React.ReactNode;
}) {
  const session = await getSession();
  return session?.role === "DOCTOR" ? doctor : staff;
}
