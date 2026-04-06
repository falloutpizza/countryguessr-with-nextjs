import "./ui/globals.css";
import { Roboto_Mono } from "next/font/google";

const roboto = Roboto_Mono({
  subsets: ["latin"],
  weight: ["400", "600"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body
        className={`${roboto.className} flex text-center h-screen justify-center items-center`}
      >
        <main className="main-container h-9/10 w-9/10 rounded-4xl border-black border-2">
          {children}
        </main>
      </body>
    </html>
  );
}
