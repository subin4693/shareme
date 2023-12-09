import "../globals.css";
import {
    Navbar,
    Rightsidebar,
    Leftsidebar,
    Bottombar,
} from "@/components/index";

export const metadata = {
    title: "Chats",
    description: "chat with your squard",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="bg-gray-100">
                <Navbar />
                <main className=" grid_three_layout main_tag">
                    <div>
                        <Leftsidebar />
                    </div>

                    <session className="rounded-md w-screen lg:w-full">
                        {children}
                    </session>
                    <div className="hidden lg:block"></div>
                    <Bottombar />
                </main>
            </body>
        </html>
    );
}
