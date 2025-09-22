import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider, dark } from "@clerk/nextjs";
import { Toaster } from "sonner";
import Header from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AI Career Coach",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang="en" suppressHydrationWarning>
        <head>
          <link rel="icon" href="/logo.png" sizes="any" />
        </head>
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem={false}
            disableTransitionOnChange
          >
            {/* Apply the font class to this div */}
            <div className={`${inter.className}`}>
              <Header />
              <main className="min-h-screen">{children}</main>
              <Toaster richColors />
            </div>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}