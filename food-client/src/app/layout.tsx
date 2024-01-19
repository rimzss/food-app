import Header from "@/components/header/Header";
import "./globals.scss";
import { ThemeProvider } from "@/theme";
import Footer from "@/components/footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <section className="px-5 md:px-32">
            <Header />
            {children}
          </section>

          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
