import { PagePlaceholder } from "@/components/layout/page-placeholder";
import { requirePermission } from "@/lib/auth/dal";

export default async function RegistrationsPage() {
  await requirePermission("registrations.approve");
  return (
    <PagePlaceholder
      title="Registrations"
      description="Pending owner sign-ups to approve."
    />
  );
}
