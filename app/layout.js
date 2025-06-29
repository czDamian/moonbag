import { Roboto } from "next/font/google";
import "./globals.css";
import { Wallet } from "./components/Wallet";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata = {
  title: "Moon Bag",
  description: "Moon Bag Treasury",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} antialiased`}
      >
        <Wallet>
          {children}
        </Wallet>
      </body>
    </html>
  );
}
