import { PagePlaceholder } from "@/components/layout/page-placeholder";
import { requireRole } from "@/lib/auth/dal";

export default async function MyPetsPage() {
  await requireRole("OWNER");
  return (
    <PagePlaceholder
      title="My pets"
      description="All pets registered under your account."
    />
  );
}
