import { PagePlaceholder } from "@/components/layout/page-placeholder";
import { requirePermission } from "@/lib/auth/dal";

export default async function QueuePage() {
  await requirePermission("queue.manage");
  return (
    <PagePlaceholder
      title="Queue"
      description="Today's walk-ins and checked-in patients."
    />
  );
}
