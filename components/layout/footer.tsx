export function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900">
      <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-neutral-600 dark:text-neutral-400">
          © {new Date().getFullYear()} AI57 Landing. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
