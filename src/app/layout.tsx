import Header from "./_components/Header";
import "./globals.css";
import { ReactNode } from "react";
import { Inter } from 'next/font/google'
import { Open_Sans } from 'next/font/google'

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ['latin'] })
const open = Open_Sans({ subsets: ['cyrillic'] })
export const metadata = {
  title: "Hussein Saleem",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <body className={`${open.className} black`}>
        <Header />
        <div className=" container mx-auto px-4 ">
          {children}</div>
      </body>
    </html>
  );
}