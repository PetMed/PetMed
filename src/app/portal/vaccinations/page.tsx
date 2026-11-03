import { PagePlaceholder } from "@/components/layout/page-placeholder";
import { requireRole } from "@/lib/auth/dal";

export default async function VaccinationsPage() {
  await requireRole("OWNER");
  return (
    <PagePlaceholder
      title="Vaccinations"
      description="Vaccination schedule and due dates."
    />
  );
}
