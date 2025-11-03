import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | AI57 Landing",
  description: "Learn more about AI57",
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-neutral-900 dark:text-neutral-50">
        About
      </h1>
      <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">
        This is an example About page demonstrating the folder structure.
      </p>
    </div>
  );
}
