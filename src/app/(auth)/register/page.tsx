import Link from "next/link";

export default function CreateAccountPage() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-xl font-semibold">Create account</h1>
      <p className="text-sm text-muted-foreground">Coming soon.</p>
      <Link href="/login" className="text-sm text-primary hover:underline">
        Back to sign in
      </Link>
    </div>
  );
}
