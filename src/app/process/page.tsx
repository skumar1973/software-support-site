import type { Metadata } from "next";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Process",
  description:
    "A practical process for software assessment, troubleshooting, maintenance and improvement.",
};

const steps = [
  "Understand",
  "Assess",
  "Plan",
  "Fix & Improve",
  "Test",
  "Support",
];

export default function ProcessPage() {
  return (
    <section className="py-20 sm:py-28">
      <Container>

        <p className="text-sm font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
          Process
        </p>

        <h1 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl dark:text-white">
          A straightforward engineering process.
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-600 dark:text-gray-300">
          Understand the problem first, then diagnose, fix, test and
          continuously improve the software.
        </p>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

          {steps.map((step, index) => (
            <div
              key={step}
              className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900"
            >
              <span className="text-sm font-bold text-blue-600 dark:text-blue-400">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h2 className="mt-3 text-xl font-semibold text-gray-900 dark:text-white">
                {step}
              </h2>

            </div>
          ))}

        </div>

      </Container>
    </section>
  );
}
