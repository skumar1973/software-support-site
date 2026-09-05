import Link from "next/link";
import Container from "@/components/ui/Container";

export const metadata = {
  title: "Software Training",
  description:
    "Practical software development and technology training for developers, IT teams and organizations.",
};

const trainingAreas = [
  {
    title: "Application Development",
    description:
      "Learn practical approaches to designing, developing and maintaining business applications.",
  },
  {
    title: "Backend Development",
    description:
      "Training covering backend application development, APIs, services, databases and integration patterns.",
  },
  {
    title: "Frontend Development",
    description:
      "Hands-on learning for modern frontend development, responsive interfaces and maintainable UI architecture.",
  },
  {
    title: "API & Integration",
    description:
      "Understand REST APIs, system integration, troubleshooting and reliable application-to-application communication.",
  },
  {
    title: "Database Development",
    description:
      "Practical database concepts, SQL, application integration, troubleshooting and performance considerations.",
  },
  {
    title: "Application Maintenance",
    description:
      "Learn how to understand, troubleshoot, maintain and enhance existing software applications.",
  },
];

export default function TrainingPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-engineering-grid py-20 sm:py-28">
        <Container>
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
              Software Training
            </p>

            <h1 className="mt-5 text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl">
              Learn software engineering through
              <span className="block text-blue-600">
                practical experience.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Practical, technology-focused training designed for developers,
              IT professionals and organizations looking to strengthen their
              software engineering capabilities.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                Discuss Training
              </Link>

              <a
                href="#training-areas"
                className="rounded-lg border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                View Training Areas
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* Training Areas */}
      <section id="training-areas" className="py-20 sm:py-24">
        <Container>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
              Training Programs
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Practical training for real-world software development
            </h2>

            <p className="mt-4 text-lg leading-8 text-slate-600">
              Training can be structured around specific technologies,
              application development needs or the requirements of your team.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {trainingAreas.map((area) => (
              <div
                key={area.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <h3 className="text-xl font-semibold text-slate-900">
                  {area.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Training Model */}
      <section className="border-y border-slate-200 bg-slate-50 py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-3">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                Training Approach
              </p>

              <h2 className="mt-3 text-3xl font-bold text-slate-900">
                Designed around practical learning
              </h2>
            </div>

            <div className="lg:col-span-2 grid gap-8 sm:grid-cols-3">
              <div>
                <h3 className="font-semibold text-slate-900">
                  Understand
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Understand the concepts, architecture and technologies behind
                  the application.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-slate-900">
                  Practice
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Apply the concepts through examples, exercises and
                  application scenarios.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-slate-900">
                  Apply
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Use the knowledge to solve real software development and
                  maintenance problems.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-24">
        <Container>
          <div className="rounded-2xl bg-slate-950 px-6 py-12 text-center sm:px-12">
            <h2 className="text-3xl font-bold text-white">
              Looking for practical software training?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-300">
              Tell us about your technology, team and learning objectives.
              Training can be structured around your specific requirements.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              Discuss Your Training Requirements
            </Link>
          </div>
        </Container>
      </section>

      {/* Software Internship Training */}
      <section className="border-y border-blue-100 bg-blue-50/60 py-20 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            
            {/* Content */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                Software Internship Training
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                From learning software development to building real applications.
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                A practical internship-oriented training program designed for
                students and fresh graduates who want to develop real-world
                software engineering skills through hands-on projects.
              </p>

              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
                >
                  Enquire About Internship
                </Link>
              </div>
            </div>

            {/* Internship highlights */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="font-semibold text-slate-900">
                  Project-Based Learning
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Work on practical software projects instead of learning only
                  through theoretical exercises.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="font-semibold text-slate-900">
                  Development Practices
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Learn Git, debugging, code organization, testing and maintainable
                  development practices.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="font-semibold text-slate-900">
                  Real-World Technologies
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Gain practical exposure to technologies used in modern software
                  development.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="font-semibold text-slate-900">
                  Application Support
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Understand how real applications are maintained, troubleshot and
                  enhanced after deployment.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Internship Program */}
      <section className="py-20 sm:py-24">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
              Internship Program
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Learn. Build. Experience real software engineering.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              The internship program is structured to help students move from
              classroom concepts to practical software development.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 p-6">
              <div className="text-sm font-semibold text-blue-600">
                01
              </div>

              <h3 className="mt-3 text-xl font-semibold text-slate-900">
                Learn
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Understand programming concepts, application architecture,
                databases, APIs and development tools.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-6">
              <div className="text-sm font-semibold text-blue-600">
                02
              </div>

              <h3 className="mt-3 text-xl font-semibold text-slate-900">
                Build
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Apply your knowledge by working on practical application
                development projects.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-6">
              <div className="text-sm font-semibold text-blue-600">
                03
              </div>

              <h3 className="mt-3 text-xl font-semibold text-slate-900">
                Experience
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Learn how software teams approach version control, debugging,
                testing, maintenance and production support.
              </p>
            </div>
          </div>
        </Container>
      </section>

    </>
  );
}
