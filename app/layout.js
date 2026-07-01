import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "JobFinder",
  description: "Find your dream job",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        
      </body>
    </html>
  );
}