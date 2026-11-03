import { PagePlaceholder } from "@/components/layout/page-placeholder";
import { requirePermission } from "@/lib/auth/dal";

export default async function InventoryPage() {
  await requirePermission("stock.view");
  return (
    <PagePlaceholder
      title="Inventory"
      description="Medicines and supplies stock."
    />
  );
}
