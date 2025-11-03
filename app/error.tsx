"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 px-4">
      <h2 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-50">
        Something went wrong!
      </h2>
      <p className="text-neutral-600 dark:text-neutral-400">
        {error.message || "An unexpected error occurred"}
      </p>
      <Button onClick={() => reset()}>Try again</Button>
    </div>
  );
}
