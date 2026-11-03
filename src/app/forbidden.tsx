import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Forbidden() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-4 p-6 text-center">
      <p className="font-heading text-6xl font-bold text-primary">403</p>
      <h1 className="text-xl font-semibold">No access</h1>
      <p className="max-w-sm text-sm text-muted-foreground">
        You do not have permission to view this page. Ask the doctor to grant
        access.
      </p>
      <Button nativeButton={false} render={<Link href="/" />}>
        Go home
      </Button>
    </div>
  );
}
