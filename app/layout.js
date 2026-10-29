import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "Maria | Full Stack Developer (MERN)",
  description: "Portfolio of Maria, a MERN stack developer in training who builds responsive web apps with Next.js and React."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <footer>
          <div className="wrap">© 2026 Maria · Cumilla, Bangladesh</div>
        </footer>
      </body>
    </html>
  );
}
