import "./globals.css";
import StoreProvider from "./StoreProvider";

export const metadata = {
  title: "CARDONA",
  description: "A fund raising decentralize application using blockchain",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
