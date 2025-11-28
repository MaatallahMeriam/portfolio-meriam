// app/layout.tsx
import "./globals.css";
import Sidebar from "./components/Sidebar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="antialiased flex">
        <Sidebar />

        {/* main content */}
        <main className="ml-48 w-full">
          {children}
        </main>
      </body>
    </html>
  );
}
