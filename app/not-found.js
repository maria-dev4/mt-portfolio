import Link from "next/link";

export default function NotFound() {
  return (
    <main className="detail wrap">
      <h1>Page not found</h1>
      <p style={{ margin: "16px 0 24px" }}>This page does not exist. Go back to the home page to find what you need.</p>
      <Link className="btn primary" href="/">Back to home</Link>
    </main>
  );
}
