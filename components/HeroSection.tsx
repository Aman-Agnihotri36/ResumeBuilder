import FormDialog from "./shared/PopOver"

export const HeroSection = () => {

    return (
        <div className="bg-gradient-to-r mt-5 from-purple-700 via-purple-600 to-indigo-800 w-full py-32 flex justify-center ">

            <div className="max-w-5xl flex flex-col gap-3 text-center">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                    Create Your Perfect Resume in Minutes
                </h1>
                <p className="mx-auto max-w-[700px] text-zinc-200 md:text-xl">
                    Stand out from the crowd with our professional resume builder. Easy to use, ATS-friendly, and tailored for your dream job.
                </p>

                <div className="flex gap-4 justify-center">
                    {/* <button className="bg-white p-2 px-6 rounded-md text-[1.1rem] text-purple-700 hover:bg-zinc-200">
                        

                    </button> */}
                    <FormDialog />
                    <button className="bg-white p-2 px-6 rounded-md text-[1.1rem] text-purple-700 hover:bg-zinc-200">
                        View Templet

                    </button>
                </div>
            </div>
        </div>
    )
}