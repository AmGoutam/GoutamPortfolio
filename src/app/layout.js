import Cursor from "./componets/Cursor";
import FiexContactForm from "./componets/FiexContactForm";
import FixedSocialIcon from "./componets/FixedSocialIcon";
import Footer from "./componets/Footer";
import Header from "./componets/Header";
import ProgressBar from "./componets/ProgressBar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "My Portfolio",
  description: "My Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Cursor />
        <FixedSocialIcon />
        <FiexContactForm />
        <Header />
        <ProgressBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
