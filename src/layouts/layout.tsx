
"use client"
import { Inter, Noto_Serif_JP } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

const noto = Noto_Serif_JP({
    subsets: ["latin"],
    weight: ['400', '500', '600'],
    variable: '--font-noto'
});


export default function MainLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (

        <><Header /><div className={`${inter.className} ${noto.variable}`}>
            {children}
        </div><Footer /></>
        
        // <html lang="en">
        //     {/* <body> */}
               
        //     {/* </body> */}
        // </html>
    );
}
