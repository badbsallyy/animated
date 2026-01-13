import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Animated - Modern 3D Animated Website",
  description: "A fully animated website showcasing modern 3D features, stunning UI components built with Anime.js, Three.js, React Three Fiber, Motion, and Tailwind CSS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased bg-gray-950 font-sans">
        {children}
      </body>
    </html>
  );
}
