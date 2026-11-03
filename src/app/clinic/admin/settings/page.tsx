import { PagePlaceholder } from "@/components/layout/page-placeholder";
import { requirePermission } from "@/lib/auth/dal";

export default async function SettingsPage() {
  await requirePermission("settings.manage");
  return (
    <PagePlaceholder
      title="Settings"
      description="Clinic details, services and prices."
    />
  );
}
