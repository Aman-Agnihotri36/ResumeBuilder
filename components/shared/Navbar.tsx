import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"

import Link from "next/link"


export const Navbar = () => {
    return (
        <div>
            <div className="flex justify-between items-center px-10  h-[60px]">
                <div>
                    <h1 className="text-2xl font-bold text-purple-700">ResumeBuilder</h1>
                </div>
                <div className="flex justify-center items-center text-[1.1rem] gap-10">
                    <p className="text-gray-600">Templates</p>
                    <p className="text-gray-600">Features</p>
                    <p className="text-gray-600">Pricing</p>
                </div>
                <div className="flex gap-7 justify-center items-center ">
                    <SignedIn>
                        <UserButton signInUrl='/' />
                    </SignedIn>
                    <SignedOut>
                        <button className="rounded-full size='lg">
                            <Link href='/sign-in'>
                                Login
                            </Link>
                        </button>
                    </SignedOut>
                </div>
            </div>
            <hr className=" opacity-80" />
        </div>
    )
}