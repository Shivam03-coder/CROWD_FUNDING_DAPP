import Header from "@/components/layouts/header/Header";
import "./globals.css";
import StoreProvider from "./StoreProvider";

export const metadata = {
  title: "CARDONA",
  description: "A fund raising decentralize application using blockchain",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-Poppins bg-blueCharcoal-600">
        <Header />
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
