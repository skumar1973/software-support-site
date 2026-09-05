import type { Metadata } from "next";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about our software engineering and application support services.",
};

export default function AboutPage() {
  return (
    <section className="py-20 sm:py-28">
      <Container>

        <p className="text-sm font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
          About
        </p>

        <h1 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl dark:text-white">
          Practical software engineering support.
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-600 dark:text-gray-300">
          I provide software engineering, application maintenance and
          production support services for businesses that rely on existing
          software applications.
        </p>

      </Container>
    </section>
  );
}