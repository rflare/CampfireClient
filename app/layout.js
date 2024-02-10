import "@/css/index.css"
import "@/css/fonts.css"

import BottomSection from "@/components/BottomSection";

export const metadata = {
    title: "Create Next App"
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                {children}
                <BottomSection />
            </body>
        </html>

    );
}
