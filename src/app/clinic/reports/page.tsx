import { PagePlaceholder } from "@/components/layout/page-placeholder";
import { requirePermission } from "@/lib/auth/dal";

export default async function ReportsPage() {
  await requirePermission("reports.operational");
  return (
    <PagePlaceholder
      title="Reports"
      description="Operational and financial reports."
    />
  );
}
