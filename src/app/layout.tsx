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
      <body className={fira.className}>
        <header className="bg-slate-800">
          <nav className="navbar flex justify-between">
            <h1>Cek Cuaca!</h1>
            <ul className="flex flex-row gap-5">
              <li className="cursor-pointer hover:scale-125">Home</li>
              <li className="cursor-pointer hover:scale-12">About Us</li>
            </ul>
          </nav>
        </header>

        <main className="min-h-screen bg-slate-900 p-2  text-white">
          {children}
        </main>
        <footer className="p-5 bg-footer footer footer-center text-white bg-zinc-800">
          Create Using Next.13 and Import API from openweather.com
        </footer>
      </body>
    </html>
  );
}
