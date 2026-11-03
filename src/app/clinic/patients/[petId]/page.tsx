import { PagePlaceholder } from "@/components/layout/page-placeholder";
import { requirePermission } from "@/lib/auth/dal";

export default async function PatientPage({
  params,
}: {
  params: Promise<{ petId: string }>;
}) {
  await requirePermission("patients.manage");
  const { petId } = await params;
  return (
    <PagePlaceholder
      title={`Patient ${petId}`}
      description="Pet record, visits and vaccinations."
    />
  );
}
