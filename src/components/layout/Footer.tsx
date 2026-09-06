import Container from "../ui/Container";
import VisitorCounter from "../../components/VisitorCounter";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-950">
      <Container>
        <div className="flex flex-col gap-4 py-8 sm:flex-row sm:items-center sm:justify-between">

          <div>
            <p className="font-semibold text-gray-900 dark:text-white">
              Software Engineering & Support
            </p>

            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              Software maintenance, engineering and application support.
            </p>
          </div>

          <p className="text-sm text-gray-500 dark:text-gray-400">
            © {year} All rights reserved.
          </p>
          
          <VisitorCounter />
          
        </div>
      </Container>
    </footer>
  );
}
