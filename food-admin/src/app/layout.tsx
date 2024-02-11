import ThemeProvider from "@/theme";
import "./globals.css";
import AuthProvider from "@/context/authProvider";
import UserProvider from "@/context/userProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <UserProvider>
            <ThemeProvider>{children}</ThemeProvider>
          </UserProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
