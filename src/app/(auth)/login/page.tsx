import Link from "next/link";
import { Button } from "@/components/ui/button";
import { devSignIn } from "@/lib/auth/actions";

const DEV_ROLES = [
  { role: "OWNER", label: "Continue as pet owner" },
  { role: "STAFF", label: "Continue as staff" },
  { role: "DOCTOR", label: "Continue as doctor" },
];

export default function LoginPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-1">
        <h1 className="text-xl font-semibold">Sign in</h1>
        <p className="text-sm text-muted-foreground">
          Dev login until auth is wired up.
        </p>
      </div>
      <form action={devSignIn} className="flex flex-col gap-2">
        {DEV_ROLES.map(({ role, label }) => (
          <Button
            key={role}
            type="submit"
            name="role"
            value={role}
            variant="outline"
          >
            {label}
          </Button>
        ))}
      </form>
      <div className="flex justify-between text-sm">
        <Link href="/register" className="text-primary hover:underline">
          Create account
        </Link>
        <Link
          href="/forgot-password"
          className="text-muted-foreground hover:underline"
        >
          Forgot password?
        </Link>
      </div>
    </div>
  );
}
