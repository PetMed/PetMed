import { PagePlaceholder } from "@/components/layout/page-placeholder";
import { requirePermission } from "@/lib/auth/dal";

export default async function ExpensesPage() {
  await requirePermission("expenses.record");
  return (
    <PagePlaceholder title="Expenses" description="Clinic running costs." />
  );
}
