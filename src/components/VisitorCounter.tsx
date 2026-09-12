"use client";

import { useEffect, useState } from "react";

export default function VisitorCounter() {
  const [visitors, setVisitors] = useState<number | null>(null);

  useEffect(() => {
    // Prevent counting the same browser session more than once
    const alreadyCounted = sessionStorage.getItem("visitor-counter");

    if (alreadyCounted) {
      return;
    }

    const updateVisitorCount = async () => {
      try {
        const response = await fetch("/api/visitor", {
          method: "GET",
          cache: "no-store",
        });

        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`);
        }

        const data = await response.json();

        if (data.success) {
          sessionStorage.setItem("visitor-counter", "true");
          setVisitors(data.visitors);
        }
      } catch (error) {
        console.error("Visitor counter error:", error);
      }
    };

    updateVisitorCount();
  }, []);

  return (
    <span className="text-sm text-gray-500 dark:text-gray-400">
      Visitors:{" "}
      <span className="font-semibold">
        {visitors !== null ? visitors.toLocaleString() : "..."}
      </span>
    </span>
  );
}