/* Css */
import "./globals.css";

/* Components */
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

export const metadata = {
  title: "Domo Frontend Challenge",
  description: "Desafío creado para el Domo Frontend Challenge",
};

const backgroundImageURL =
  "https://domofrontendchallenge.netlify.app/img/asset-background.jpg";

const containerStyle = {
  backgroundImage: `url(${backgroundImageURL})`,
  backgroundSize: "40%",
  backgroundPositionX: "right",
  backgroundRepeat: "no-repeat",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es-AR">
      <body  style={containerStyle}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
