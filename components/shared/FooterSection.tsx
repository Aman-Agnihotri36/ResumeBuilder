

export const FooterSection = () => {
    return (
        <div className="bg-gradient-to-r mt-5 from-purple-700 via-purple-600 to-indigo-800 w-full py-24 flex justify-center ">
            <div className="max-w-5xl flex flex-col gap-3 text-center">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                    Ready to Create Your Perfect Resume?
                </h1>
                <p className="mx-auto max-w-[700px] text-zinc-200 md:text-xl">
                    Join thousands of job seekers who have successfully landed their dream jobs using our resume builder.
                </p>

                <div>
                    <button className="bg-white p-2 px-6 rounded-md text-[1.1rem] text-purple-700 hover:bg-zinc-200">
                        Get Started

                    </button>

                </div>
            </div>
        </div>
    )
}