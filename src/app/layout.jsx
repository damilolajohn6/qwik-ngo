import { Lato } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const lato = Lato({
  weight: ["400", "700"], 
  variable: "--font-lato",
  subsets: ["latin"],
  display: "swap", 
});

export const metadata = {
  title: "Pathway to Freedom",
  description:
    "At Pathway to Freedom, we are on a mission to rescue children trapped in forced labor and provide them with the opportunity to thrive through education and care.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${lato.variable} antialiased`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
