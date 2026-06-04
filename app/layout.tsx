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

        <a
          href="https://wa.me/923334848228"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-400 text-white px-5 py-4 rounded-full font-bold shadow-lg transition"
        >
          WhatsApp
        </a>

        <Footer />
      </body>
    </html>
  );
}