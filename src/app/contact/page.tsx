import type { Metadata } from "next";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact us to discuss software maintenance, application support or engineering requirements.",
};

export default function ContactPage() {
  return (
    <section className="py-20 sm:py-28">
      <Container>

        <p className="text-sm font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
          Contact
        </p>

        <h1 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl dark:text-white">
          Let's discuss your software requirement.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600 dark:text-gray-300">
          Have an existing application that needs maintenance, support or
          improvement? Let's discuss the problem and identify the best way
          forward.
        </p>

        <div className="mt-10">
          <a
            href="mailto:hello@example.com"
            className="inline-flex rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
          >
            Email Me
          </a>
        </div>

      </Container>
    </section>
  );
}
