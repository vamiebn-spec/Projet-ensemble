
import Navbar from "../components/Navbar";

export const metadata = {
  title: "GestComd",
  description: "Gestion des commandes, produits et clients.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" >
      <head>
        <link href="https://cdn.jsdelivr.net/npm/daisyui@5" rel="stylesheet" type="text/css" />
      </head>
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
