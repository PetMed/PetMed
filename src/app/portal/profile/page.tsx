import { PagePlaceholder } from "@/components/layout/page-placeholder";
import { requireRole } from "@/lib/auth/dal";

export default async function ProfilePage() {
  await requireRole("OWNER");
  return (
    <PagePlaceholder
      title="Profile"
      description="Your contact details and password."
    />
  );
}
