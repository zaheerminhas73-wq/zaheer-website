import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Zaheer & Zaheer Advocates",
  description: "Advocates & Legal Consultants",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <Navbar />

        <main className="pt-0">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}