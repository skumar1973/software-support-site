import Hero from "@/components/home/Hero";
import Container from "@/components/ui/Container";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Hero />

      {/* Core offerings */}
      <section className="border-y border-slate-200 bg-slate-50 py-20 sm:py-24">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
              What We Offer
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Engineering, support and practical training
            </h2>

            <p className="mt-4 text-lg leading-8 text-slate-600">
              Helping businesses maintain their software and helping people
              develop practical software engineering skills.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {/* Maintain */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                Maintain
              </h3>

              <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
                Keep existing applications stable, reliable and maintainable.
              </p>

              <Link
                href="/services"
                className="mt-5 inline-flex text-sm font-semibold text-blue-600 hover:text-blue-700"
              >
                Maintenance Services →
              </Link>
            </div>

            {/* Improve */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                Improve
              </h3>

              <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
                Fix issues, improve performance and enhance existing systems.
              </p>

              <Link
                href="/services"
                className="mt-5 inline-flex text-sm font-semibold text-blue-600 hover:text-blue-700"
              >
                View Services →
              </Link>
            </div>

            {/* Support */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                Support
              </h3>

              <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
                Practical technical support for applications and integrations.
              </p>

              <Link
                href="/contact"
                className="mt-5 inline-flex text-sm font-semibold text-blue-600 hover:text-blue-700"
              >
                Discuss Support →
              </Link>
            </div>

            {/* Training */}
            <div className="rounded-2xl border border-blue-200 bg-blue-50 p-6 shadow-sm dark:border-blue-900 dark:bg-blue-950/40">
              <h3 className="text-xl font-semibold text-slate-900">
                Training
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Practical software training and internship programs for
                developers, students and technology teams.
              </p>

              <Link
                href="/training"
                className="mt-5 inline-flex text-sm font-semibold text-blue-600 hover:text-blue-700"
              >
                Explore Training →
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
