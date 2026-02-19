import "./globals.css";
import { Parisienne, Playfair_Display } from "next/font/google";

export const metadata = {
  title: "Nina and Alex",
  description: "Nina and Alex wedding page.",
};

const vibes = Parisienne({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-vibes",      // 👈 mantenemos el mismo nombre
  display: "swap",
});

const garamod = Playfair_Display({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-garamod",    // 👈 mantenemos el mismo nombre
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${vibes.variable} ${garamod.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
