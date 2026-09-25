import "./globals.css";

export const metadata = {
  title: "Jovi SmartFlow Camera",
  description: "Jovi SmartFlow Camera — Aponte. Ele calibra.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="pt-BR"
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
