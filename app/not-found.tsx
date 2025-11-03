import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 px-4">
      <h2 className="text-4xl font-bold text-neutral-900 dark:text-neutral-50">
        404
      </h2>
      <p className="text-lg text-neutral-600 dark:text-neutral-400">
        Page not found
      </p>
      <Button asChild>
        <Link href="/">Return Home</Link>
      </Button>
    </div>
  );
}
