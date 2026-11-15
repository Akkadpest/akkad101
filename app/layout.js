'use client';
import Script from "next/script";
import { useEffect, useState } from "react";
import Head from "next/head";
import Header from "@/Components/Layout/Header";
import HeaderTwo from "@/Components/Home2/Header";
import Footer from "@/Components/Layout/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Link from "next/link";
import { config } from "@fortawesome/fontawesome-svg-core";
import GoogleReview from "@/Components/Sections/GoogleReview";
config.autoAddCss = false;
import { usePathname } from "next/navigation";
import "./globals.css";
import BoostrapJS from "@/Components/Layout/BoostrapJS";
import FooterTwo from "@/Components/Home2/Footer";
import SideBar from "@/Components/Layout/SideBar";
import { GoogleTagManager } from '@next/third-parties/google' ;

const useScreenSize = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    handleResize(); 
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return width;
};

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const screenWidth = useScreenSize();
  const isHomeTwo = pathname === "/home-two";
  // The new app-style homepage ships its own header, footer and bottom bar
  const isStandalone = pathname === "/home-new";
  const isMobile = screenWidth <= 576;
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

return (
  <html lang="en">
    {/* Google AdSense */}
    <Script
      async
      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8414242571367128"
      crossOrigin="anonymous"
      strategy="afterInteractive"
    />

    <GoogleTagManager gtmId="GTM-MJ6CC34P"/>

    {/* Meta Pixel Code */}
    <Script id="meta-pixel" strategy="afterInteractive">
      {`
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '1584154706664855');
        fbq('track', 'PageView');
      `}
    </Script>
<head>
  <Script id="openai-pixel" strategy="afterInteractive">
    {`!function(w,d,s,u){if(w.oaiq)return;var q=function(){q.q.push(arguments)};q.q=[];w.oaiq=q;var j=d.createElement(s);j.async=1;j.src=u;var f=d.getElementsByTagName(s)[0];f.parentNode.insertBefore(j,f)}(window,document,"script","https://bzrcdn.openai.com/sdk/oaiq.min.js");oaiq("init",{pixelId:"UUnZ7gia989T6CeX9sLM5h",debug:true});`}
  </Script>
</head>
    <body>

      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src="https://www.facebook.com/tr?id=1584154706664855&ev=PageView&noscript=1"
        />
      </noscript>

      <noscript>
  <iframe src="'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);"
height="0" width="0" 
style={{display:"none", visibility:"hidden"}}>
  </iframe>
  </noscript>
        <meta name="ahrefs-site-verification" content="72db0a3e6f44a1aa7716fda12e82c549a0af72fd427d44724ca02c86d4450c13" />
        <link rel="icon" href="/images/faviconakkad.ico" sizes="any" />
        <Link rel="stylesheet" type="text/css" href="https://bookingwidget.pestcontrol.ae/static/css/main.css" />
        
        <BoostrapJS />
        {isStandalone ? children : (<>
        {isHomeTwo && isMobile ? <HeaderTwo   isSidebarOpen={isSidebarOpen} 
            setIsSidebarOpen={setIsSidebarOpen} /> : <Header   isSidebarOpen={isSidebarOpen} 
            setIsSidebarOpen={setIsSidebarOpen} />}
        <div className=" new-design-width "> 
        <SideBar isOpen={isSidebarOpen} />
        <div className={isMobile && isHomeTwo ? "" : "banner_padd"}></div>
        <main className="left-new-width">{children}
        {!isHomeTwo && <GoogleReview />}
        {isHomeTwo && isMobile ? <FooterTwo /> : <Footer />}
        </main>
        </div>
        </>)}
      </body>
    </html>
  );
}