import "./globals.css";
import { Fira_Code, Inter } from "next/font/google";

const fira = Fira_Code({ subsets: ["latin"] });

export const metadata = {
  title: "Cek Cuaca",
  description: "Weather app using OpenWeather API",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-t from-primary to-secondary">
        <header className=" bg-gradient-to-r from-[#0A4D68] to-[#088395] ">
          <nav className="navbar flex justify-between">
            <h1>Cek Cuaca!</h1>
            <ul className="flex flex-row gap-5">
              <li className="cursor-pointer hover:scale-125">Home</li>
              <li className="cursor-pointer hover:scale-12">About Us</li>
            </ul>
          </nav>
        </header>

        <main className="min-h-screen    text-white">{children}</main>
        <footer className="p-5 bg-gradient-to-tr from-[#19A7CE] to-[#146C94] footer footer-center text-white">
          Create Using Next.13 and Import API from openweather.com
        </footer>
      </body>
    </html>
  );
}
