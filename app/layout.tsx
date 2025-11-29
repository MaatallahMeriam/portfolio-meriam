import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="antialiased">
        {/* main content */}
        <main className="w-full">
          {children}
        </main>
      </body>
    </html>
  );
}
