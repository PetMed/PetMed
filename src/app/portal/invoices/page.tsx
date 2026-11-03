import { PagePlaceholder } from "@/components/layout/page-placeholder";
import { requireRole } from "@/lib/auth/dal";

export default async function InvoicesPage() {
  await requireRole("OWNER");
  return (
    <PagePlaceholder
      title="Invoices"
      description="Bills and payment history."
    />
  );
}
