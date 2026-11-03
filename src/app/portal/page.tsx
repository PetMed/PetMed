import { PagePlaceholder } from "@/components/layout/page-placeholder";
import { requireRole } from "@/lib/auth/dal";

export default async function DashboardPage() {
  await requireRole("OWNER");
  return (
    <PagePlaceholder
      title="Dashboard"
      description="Upcoming visits, reminders and your pets at a glance."
    />
  );
}
