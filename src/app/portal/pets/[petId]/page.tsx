import { PagePlaceholder } from "@/components/layout/page-placeholder";
import { requireRole } from "@/lib/auth/dal";

export default async function PetPage({
  params,
}: {
  params: Promise<{ petId: string }>;
}) {
  await requireRole("OWNER");
  const { petId } = await params;
  return (
    <PagePlaceholder
      title={`Pet ${petId}`}
      description="Profile, weight history and records."
    />
  );
}
