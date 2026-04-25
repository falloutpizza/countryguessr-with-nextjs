import "./ui/globals/globals.css";
import { Roboto_Mono } from "next/font/google";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

import Navbar from "./ui/navbar/Nav";
import AuthInitializer from "../store/AuthIntialiser";
const roboto = Roboto_Mono({
  subsets: ["latin"],
  weight: ["400", "600"],
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const token = cookieStore.get("user")?.value;
  let verifiedToken: any;
  if (token) {
    verifiedToken = jwt.verify(token, process.env.TOKEN_SECRET!);
  }

  return (
    <html>
      <body
        className={`${roboto.className} flex text-center h-screen justify-center items-center`}
      >
        <main className="main-container h-9/10 w-9/10 rounded-4xl border-black border-2 overflow-scroll p-2">
          <AuthInitializer user={verifiedToken} />
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
