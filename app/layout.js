import { Roboto, Raleway } from "next/font/google";
import "./globals.css";
import { Wallet } from "./components/Wallet";
import Header from "./components/Header";
import Footer from "./components/Footer";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata = {
  title: "Moon Bag",
  description: "Where Integrity Meets Community",
  authors: [{ name: 'Damian', url: 'https://x.com/MoonBagOG' }],
  robots: 'index, follow',
  openGraph: {
    title: "Moon Bag",
    description:
      "Where Integrity Meets Community",
    url: "https://www.moon-bag.fun/",
    siteName: "MoonBag",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Moon Bag",
    description:
      "Where Integrity Meets Community",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${raleway.variable} font-raleway antialiased`}
      >
        <Wallet>
          <div>
            <Header />
          </div>
          <div className="px-12 md:px-16 ">{children}</div>
          <Footer />
        </Wallet>
      </body>
    </html>
  );
}
