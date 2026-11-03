import { PagePlaceholder } from "@/components/layout/page-placeholder";
import { requirePermission } from "@/lib/auth/dal";

export default async function ClientsAndPetsPage() {
  await requirePermission("patients.manage");
  return (
    <PagePlaceholder
      title="Clients and pets"
      description="Search owners and their pets."
    />
  );
}
