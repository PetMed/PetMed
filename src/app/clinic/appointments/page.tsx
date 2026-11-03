import { PagePlaceholder } from "@/components/layout/page-placeholder";
import { requirePermission } from "@/lib/auth/dal";

export default async function AppointmentsPage() {
  await requirePermission("appointments.manage");
  return (
    <PagePlaceholder
      title="Appointments"
      description="Clinic calendar and bookings."
    />
  );
}
