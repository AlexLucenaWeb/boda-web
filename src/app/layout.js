import "./globals.css";
import { Parisienne, Playfair_Display, Alex_Brush } from "next/font/google";

export const metadata = {
  title: "Nina & Alex",
  description: "Nuestra boda | Naše vjenčanje",
};

const vibes = Parisienne({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-vibes",
  display: "swap",
});

const alex = Alex_Brush({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-alex",
  display: "swap",
});

const garamod = Playfair_Display({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-garamod",
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${vibes.variable} ${garamod.variable} ${alex.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
