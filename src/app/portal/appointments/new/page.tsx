import { PagePlaceholder } from "@/components/layout/page-placeholder";
import { requireRole } from "@/lib/auth/dal";

export default async function BookAppointmentPage() {
  await requireRole("OWNER");
  return (
    <PagePlaceholder
      title="Book appointment"
      description="Pick a pet, service and time slot."
    />
  );
}
