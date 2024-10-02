
import "./globals.css";
import Header from "./Components/Header";
export const metadata = {
  title: "Constitution App",
  description: "created for India",
  icons:{
icon:"/logo1.png"
  }
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <Header />
        {children}
      </body>
    </html>
  );
}
