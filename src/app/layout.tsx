import Header from "@/components/Navigation/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/Navigation/Footer";
import Head from "next/head";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Kago Group",
    default: "Kago Group",
  },
  description:
    "Transformez votre présence en ligne avec KAGO - Votre partenaire pour une transformation digitale réussie. Fondée par des entrepreneurs passionnés, notre équipe expérimentée de développeurs, project managers et designers collabore étroitement avec vous pour créer des solutions sur mesure. De la création de sites web professionnels à la mise en place de stratégies de marketing numérique, découvrez comment nous pouvons faire de votre entreprise une marque à part entière. Rejoignez-nous dans cette aventure vers le succès digital.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <Script id="hotjar">
        {`
          (function(h,o,t,j,a,r){
              h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
              h._hjSettings={hjid:3655094,hjsv:6};
              a=o.getElementsByTagName('head')[0];
              r=o.createElement('script');r.async=1;
              r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
              a.appendChild(r);
          })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
        `}
      </Script>
      <body className={inter.className}>
        {/* <Script id="google-tag-manager" strategy="afterInteractive">
          {`
        function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-54X7PT7G');
      `}
        </Script> */}
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
