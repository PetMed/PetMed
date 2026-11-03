import { Construction } from "lucide-react";

export function PagePlaceholder({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">{title}</h1>
        {description && (
          <p className="text-sm text-muted-foreground">{description}</p>
        )}
      </div>
      <div className="flex min-h-80 flex-col items-center justify-center gap-2 rounded-xl border border-dashed bg-card text-muted-foreground">
        <Construction className="size-6" />
        <p className="text-sm">Coming soon</p>
      </div>
    </div>
  );
}
