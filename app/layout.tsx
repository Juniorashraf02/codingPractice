"use client";

import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "@/styles/theme";
import Sidebar from "@/components/Sidebar";

// import Sidebar from "@/components/Sidebar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div style={{ display: "flex", minHeight: "100vh" }}>
            {/* Sidebar navigation */}
            {/* <Sidebar /> */}

            {/* Main content area */}
            <main style={{ flexGrow: 1, padding: "1.5rem" }}>
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
