import { PagePlaceholder } from "@/components/layout/page-placeholder";
import { requireRole } from "@/lib/auth/dal";

export default async function AppointmentsPage() {
  await requireRole("OWNER");
  return (
    <PagePlaceholder
      title="Appointments"
      description="Upcoming and past appointments."
    />
  );
}
