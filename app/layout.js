import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import "./icons.css";
import "react-quill/dist/quill.snow.css";
import Script from "next/script";
import GoogleAnalytics from "./GoogleAnalytics";
import { Public_Sans } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
const public_sans = Public_Sans({ subsets: ["latin"] });

export const metadata = {
  alternates: {
    canonical: `https://homepapa.ca`,
  },
  title: "Homepapa - Leading New Construction  Homes Platform in Canada",
  description:
    "Homepapa is your top destination for pre-construction homes marketplace in Canada. 1000+ Pre construction townhomes, detached & condos available at Homepapa.ca.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  openGraph: {
    images: "/dolphin.jpg",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
    },
  },
  category: "real estate",
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body /* className={public_sans.className} */>
        <NextTopLoader
          color="#00A1FF"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={true}
          easing="ease"
          speed={200}
          shadow="0 0 10px #00A1FF,0 0 5px #00A1FF"
        />
        <GoogleAnalytics />
        {children}
        {/* <Script
          dangerouslySetInnerHTML={{
            __html: `
          (function(){var js,fs,d=document,id="tars-widget-script",b="https://tars-file-upload.s3.amazonaws.com/bulb/";if(!d.getElementById(id)){js=d.createElement("script");js.id=id;js.type="text/javascript";js.src=b+"js/widget.js";fs=d.getElementsByTagName("script")[0];fs.parentNode.insertBefore(js,fs)}})();window.tarsSettings = {"convid":"dHGeSd"};
          `,
          }}
        ></Script> */}
      </body>
    </html>
  );
}
