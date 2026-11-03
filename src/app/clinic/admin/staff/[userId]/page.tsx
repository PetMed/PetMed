import { PagePlaceholder } from "@/components/layout/page-placeholder";
import { requirePermission } from "@/lib/auth/dal";

export default async function StaffPage({
  params,
}: {
  params: Promise<{ userId: string }>;
}) {
  await requirePermission("staff.manage");
  const { userId } = await params;
  return (
    <PagePlaceholder
      title={`Staff ${userId}`}
      description="Edit role and permissions."
    />
  );
}
