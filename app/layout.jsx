import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ subsets: ["latin"], weight: ['200', '400', '600'] });

export const metadata = {
  title: "Four Section Column",
  description: "A frontend mentor challenge",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon-32x32.png" />
      </head>
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
