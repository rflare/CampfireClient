import "@/styles/index.css"
import "@/styles/fonts.css"

import BottomSection from "@/components/BottomSection";

export const metadata = {
    title: "Create Next App"
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/favicon.svg" sizes="any" />
            </head>
            <body>
                {children}
                <BottomSection />
            </body>
        </html>

    );
}
