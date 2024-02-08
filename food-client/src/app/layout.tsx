import Header from "@/components/header/Header";
import "./globals.scss";
import { ThemeProvider } from "@/theme";
import Footer from "@/components/footer";
import AuthProvider from "@/context/authProvider";
import FoodProvider from "@/context/foodProvider";
import CatProvider from "@/context/catProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <AuthProvider>
            <CatProvider>
              <FoodProvider>
                <Header />
                {children}
                <Footer />
              </FoodProvider>
            </CatProvider>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
