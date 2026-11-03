import { PagePlaceholder } from "@/components/layout/page-placeholder";
import { requirePermission } from "@/lib/auth/dal";

export default async function ConsultationPage({
  params,
}: {
  params: Promise<{ visitId: string }>;
}) {
  await requirePermission("clinical.write");
  const { visitId } = await params;
  return (
    <PagePlaceholder
      title={`Consultation ${visitId}`}
      description="Clinical notes, diagnosis and treatment."
    />
  );
}
