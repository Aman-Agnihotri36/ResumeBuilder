import Link from "next/link"


export const Footer = () => {
    return (
        <footer className="w-full py-6 px-4 md:px-6 bg-gray-100">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                <div className="text-center md:text-left mb-4 md:mb-0">
                    <p className="text-sm text-gray-600">© 2024 ResumeBuilder. All rights reserved.</p>
                </div>
                <nav className="flex space-x-4">
                    <Link href='/' className="text-sm text-gray-600 hover:text-gray-900">Privacy Policy</Link>
                    <Link href='/' className="text-sm text-gray-600 hover:text-gray-900">Terms of Service</Link>
                    <Link href='/' className="text-sm text-gray-600 hover:text-gray-900">Contact Us</Link>
                </nav>
            </div>
        </footer>
    )
}