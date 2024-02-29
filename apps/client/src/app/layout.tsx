import "./globals.css";
import "@agua/ui/styles.css";
import type { Metadata } from "next";
import { headers } from "next/headers";
import { Poppins } from "next/font/google";
import { Menu, Footer } from "@agua/ui";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Agua",
  description: "Bureau spécialisé en architecture et en urbanisme",
};

export default function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
  const headersList = headers();
  const pathname = headersList.get("x-pathname") || "";
  const isHomepage = pathname === "/";

  return (
    <html lang="en">
      <body className={poppins.className}>
        <Menu home={isHomepage} />
        {children}
        <Footer home={isHomepage} />
      </body>
    </html>
  );
}
