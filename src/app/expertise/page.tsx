import type { Metadata } from "next";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Expertise",
  description:
    "Software engineering expertise covering applications, APIs, databases and integrations.",
};

export default function ExpertisePage() {
  return (
    <section className="py-20 sm:py-28">
      <Container>

        <p className="text-sm font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
          Expertise
        </p>

        <h1 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl dark:text-white">
          Engineering across the application lifecycle.
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-600 dark:text-gray-300">
          From application troubleshooting and API integration to database
          support and modernization, the focus is on solving practical
          engineering problems.
        </p>

      </Container>
    </section>
  );
}
