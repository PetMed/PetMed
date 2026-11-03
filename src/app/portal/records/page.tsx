import { PagePlaceholder } from "@/components/layout/page-placeholder";
import { requireRole } from "@/lib/auth/dal";

export default async function MedicalRecordsPage() {
  await requireRole("OWNER");
  return (
    <PagePlaceholder
      title="Medical records"
      description="Visit history and treatment summaries."
    />
  );
}
