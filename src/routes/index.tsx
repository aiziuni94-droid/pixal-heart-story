import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Anna — Appointment Setter & Virtual Assistant" },
      {
        name: "description",
        content:
          "Anna — appointment setter and virtual assistant. Real proof of work, confirmed bookings, and client results.",
      },
    ],
  }),
});

function Index() {
  useEffect(() => {
    window.location.replace("/portfolio.html");
  }, []);
  return (
    <div style={{ minHeight: "100vh", background: "#faf8f3" }}>
      <noscript>
        <meta httpEquiv="refresh" content="0; url=/portfolio.html" />
      </noscript>
    </div>
  );
}
