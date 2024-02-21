import Header from "@/components/header/Header";
import "./globals.scss";
import { ThemeProvider } from "@/theme";
import Footer from "@/components/footer";
import AuthProvider from "@/context/authProvider";
import FoodProvider from "@/context/foodProvider";
import CatProvider from "@/context/catProvider";
import BasketProvider from "@/context/basketProvider";
import AlertProvider from "@/context/alertProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <AlertProvider>
            <AuthProvider>
              <CatProvider>
                <FoodProvider>
                  <BasketProvider>
                    <Header />
                    {children}
                    <Footer />
                  </BasketProvider>
                </FoodProvider>
              </CatProvider>
            </AuthProvider>
          </AlertProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
