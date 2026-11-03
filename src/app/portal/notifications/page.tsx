import { PagePlaceholder } from "@/components/layout/page-placeholder";
import { requireRole } from "@/lib/auth/dal";

export default async function NotificationsPage() {
  await requireRole("OWNER");
  return (
    <PagePlaceholder
      title="Notifications"
      description="Reminders and clinic updates."
    />
  );
}
