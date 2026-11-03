import { PagePlaceholder } from "@/components/layout/page-placeholder";
import { requirePermission } from "@/lib/auth/dal";

export default async function StaffAccountsPage() {
  await requirePermission("staff.manage");
  return (
    <PagePlaceholder
      title="Staff accounts"
      description="Create staff and manage permissions."
    />
  );
}
