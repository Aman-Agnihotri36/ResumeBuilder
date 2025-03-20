
import { Navbar } from "@/components/shared/Navbar";

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="sm:w-full sm:h-screen ">
            <Navbar />
            <main className="h-screen flex justify-center items-center">

                {children}
            </main>

        </div>
    )
}
