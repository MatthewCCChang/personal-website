import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Matthew Chang's Website",
  description: "Portfolio Website for Matthew Chang",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
