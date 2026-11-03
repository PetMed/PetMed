import { PagePlaceholder } from "@/components/layout/page-placeholder";
import { requirePermission } from "@/lib/auth/dal";

export default async function AuditLogPage() {
  await requirePermission("audit.view");
  return (
    <PagePlaceholder title="Audit log" description="Who did what and when." />
  );
}
