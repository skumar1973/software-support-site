import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Software maintenance, production support, application modernization and engineering services.",
};
const services = [
  {
    title: "Application Maintenance",
    description:
      "Ongoing maintenance of existing software applications to keep them stable, reliable and maintainable.",
  },
  {
    title: "Production Support",
    description:
      "Practical technical support for production issues, incident investigation, troubleshooting and application stability.",
  },
  {
    title: "Bug Fixing & Enhancements",
    description:
      "Resolve application defects and implement enhancements without unnecessarily disrupting existing systems.",
  },
  {
    title: "API & Integration Support",
    description:
      "Development, troubleshooting and maintenance of APIs and integrations between business applications and external systems.",
  },
  {
    title: "Database Support",
    description:
      "Database troubleshooting, query optimization, maintenance and application-level database support.",
  },
  {
    title: "Legacy Application Modernization",
    description:
      "Gradual modernization of older applications while preserving important business functionality.",
  },
  {
    title: "Software Training & Internship Programs",
    description:
      "Practical, structured software training for developers, IT teams and organizations covering technologies, development practices and real-world application support.",
  },
];

export default function ServicesPage() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            Services
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Software engineering services for existing and evolving systems.
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Practical engineering support covering application maintenance,
            production support, modernization, integration and software
            training.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <h2 className="text-xl font-semibold text-slate-900">
                {service.title}
              </h2>

              <p className="mt-3 leading-7 text-slate-600">
                {service.description}
              </p>

              {service.title === "Software Training" && (
                <Link
                  href="/training"
                  className="mt-5 inline-flex text-sm font-semibold text-blue-600 hover:text-blue-700"
                >
                  Explore Training →
                </Link>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
