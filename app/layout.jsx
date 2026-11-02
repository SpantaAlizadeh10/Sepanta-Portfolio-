import "./globals.css";

export const metadata = {
  title: "Sepanta Ali Alizadeh — UI/UX & Visual Designer",
  description:
    "Selected UI/UX, web design, and visual identity projects by Sepanta Ali Alizadeh.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
