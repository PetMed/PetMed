import { PagePlaceholder } from "@/components/layout/page-placeholder";
import { requirePermission } from "@/lib/auth/dal";

export default async function NewInvoicePage() {
  await requirePermission("billing.create");
  return (
    <PagePlaceholder
      title="New invoice"
      description="Bill services, medicines and items."
    />
  );
}
