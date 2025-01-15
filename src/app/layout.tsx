import Header from "@/components/header";
import "./globals.css";
import "./style.css";
import Footer from "@/components/footer/footer";
import VerticleIcon from "@/components/verticle-icon/verticle-icon";

import ScrollToTopButton from '@/components/ScrollToTopButton'
import DisableImageRightClick from '@/components/DisableImageRightClick'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ToastContainer } from "react-toastify";

export const metadata = {
  title: "Adamallys LLC",
  description: "Established in 1972, Adamallys LLC is a leading ship chandler in the UAE and the broader Middle East, specializing in comprehensive technical ship supplies and provisions",
  icons: {
    icon: "/svg/logo.svg",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
        <Header />
        {children}
         <Footer />
        <VerticleIcon />
        <ScrollToTopButton />
        <DisableImageRightClick />
      </body>
    </html>
  );
}
