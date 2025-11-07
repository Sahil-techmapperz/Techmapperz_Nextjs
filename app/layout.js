import { Poppins } from 'next/font/google';
import "./globals.css";
import dynamic from 'next/dynamic';
import Script from 'next/script';

// Critical components loaded immediately
import Navbar from './_Components/Navbar';

// Non-critical components lazy loaded
const Footer = dynamic(() => import('./_Components/Footer'), { ssr: false });
const SocialMediaIcons = dynamic(() => import('./_Components/SocialMediaIcons'), { ssr: false });
const SlickCarouselProvider = dynamic(() => import('./_Components/SlickCarouselProvider'), { ssr: false });
import { Montserrat } from "next/font/google";
import Head from 'next/head';

// Dynamic imports for non-critical components removed for performance



const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-montserrat",
  display: 'swap', // Improve font loading performance
  preload: true,
});



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        {/* Preload critical assets */}
        <link rel="preload" href="/Photos/3Drendered_digital_Ear.webp" as="image" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://connect.facebook.net" />
        <link rel="dns-prefetch" href="https://calendly.com" />
      </Head>

      <body className={montserrat.variable}>
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <Navbar />
        <main id="main-content" role="main">{children}</main>
        <SlickCarouselProvider>
          <SocialMediaIcons />
          <Footer />
        </SlickCarouselProvider>
      

        {/* Meta Pixel Code */}
        <Script
          id="meta-pixel"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
            n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
            document,'script','https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '792115005500081'); fbq('track', 'PageView');`
          }}
        />

        {/* Google Ads & Analytics Scripts */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=AW-10860570322`}
          strategy="lazyOnload"
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-SWB2CH4ZWC"
          strategy="lazyOnload"
        />
        <Script
          id="google-ads"
          strategy="lazyOnload"
        >
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}           
            gtag('js', new Date());
            gtag('config', 'AW-10860570322');
            gtag('config', 'G-SWB2CH4ZWC');
          `}
        </Script>

        {/* Google Tag Manager Script */}
        <Script
          id="gtm-script"
          strategy="lazyOnload"
        >
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-MFR47W8');
          `}
        </Script>

        {/* Google Tag Manager NoScript */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MFR47W8"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
      </body>
    </html>
  );
}
