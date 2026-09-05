import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Code2,
  GraduationCap,
  Wrench,
} from "lucide-react";
import Container from "@/components/ui/Container";

const highlights = [
  "Application Maintenance",
  "Production Support",
  "Software Training",
  "Internship Training",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-engineering-grid">
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-blue-100/60 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-slate-100 blur-3xl" />
      </div>

      <Container>
        <div className="relative grid min-h-[680px] items-center gap-12 py-20 lg:grid-cols-2 lg:py-24">
          
          {/* Left - Main message */}
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
              <span className="h-2 w-2 rounded-full bg-blue-600" />
              Software Engineering & Application Support
            </div>

            {/* Heading */}
            <h1 className="mt-7 text-4xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-5xl lg:text-6xl xl:text-7xl">
              Software that works.
              <span className="block text-blue-600">
                Support that lasts.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300 sm:text-xl">
              Practical software engineering, application maintenance and
              production support for businesses that depend on reliable
              technology.
            </p>

            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-500">
              We also provide practical software training and internship
              programs designed to help developers and students build
              real-world engineering skills.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Discuss Your Requirement
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center rounded-lg border border-slate-300 bg-white dark:bg-slate-900 px-6 py-3.5 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
              >
                Explore Services
              </Link>
            </div>

            {/* Trust points */}
            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-sm text-slate-600"
                >
                  <CheckCircle2 className="h-4 w-4 text-blue-600" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Right - Service overview */}
          <div className="relative lg:pl-8">
            <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white/90 p-6 shadow-xl shadow-slate-200/50 backdrop-blur sm:p-8">
              
              <div className="mb-8 flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-slate-500">
                    What I Do
                  </p>

                  <h2 className="mt-1 text-2xl font-bold text-slate-900">
                    Engineering & Training
                  </h2>
                </div>

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50">
                  <Code2 className="h-6 w-6 text-blue-600" />
                </div>
              </div>

              <div className="space-y-4">
                {/* Service 1 */}
                <div className="flex gap-4 rounded-2xl border border-slate-200 p-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-100">
                    <Wrench className="h-5 w-5 text-slate-700" />
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-900">
                      Software Engineering
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-slate-500">
                      Maintenance, support, bug fixing, APIs, databases and
                      application modernization.
                    </p>
                  </div>
                </div>

                {/* Service 2 */}
                <div className="flex gap-4 rounded-2xl border border-slate-200 p-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50">
                    <GraduationCap className="h-5 w-5 text-blue-600" />
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-900">
                      Software Training
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-slate-500">
                      Practical training for developers, IT professionals,
                      teams and organizations.
                    </p>
                  </div>
                </div>

                {/* Service 3 */}
                <div className="rounded-2xl border border-blue-100 bg-blue-50 p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-slate-900">
                        Internship Training
                      </h3>

                      <p className="mt-1 text-sm leading-6 text-slate-600">
                        Hands-on software development experience for students
                        and fresh graduates.
                      </p>
                    </div>

                    <Link
                      href="/training"
                      className="ml-4 shrink-0 text-sm font-semibold text-blue-600 hover:text-blue-700"
                    >
                      Learn more
                    </Link>
                  </div>
                </div>
              </div>

              {/* Bottom message */}
              <div className="mt-6 border-t border-slate-200 pt-5">
                <p className="text-sm leading-6 text-slate-500">
                  <span className="font-semibold text-slate-700">
                    Practical approach.
                  </span>{" "}
                  Focused on reliable software, maintainable solutions and
                  useful technical skills.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}