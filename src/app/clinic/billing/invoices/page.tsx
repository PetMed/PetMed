import { PagePlaceholder } from "@/components/layout/page-placeholder";
import { requirePermission } from "@/lib/auth/dal";

export default async function InvoicesPage() {
  await requirePermission("billing.create");
  return (
    <PagePlaceholder title="Invoices" description="All issued invoices." />
  );
}
