
// eslint-disable-next-line  @typescript-eslint/no-explicit-any
export function StepContent({ step }: { step: any }) {
    return (

        <>
            <div className="flex-shrink-0">
                <div className="w-24 h-24 rounded-full bg-purple-100 flex items-center justify-center">
                    {step.icon}
                </div>
            </div>
            <div className="flex-grow text-center md:text-left">
                <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
            </div>
        </>

    );
}
