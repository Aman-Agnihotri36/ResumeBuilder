
// eslint-disable-next-line  @typescript-eslint/no-explicit-any
export function ProgressBar({ current, total }: { current: any, total: any }) {
    const progress = (current / total) * 100;

    return (
        <div className="mt-8">
            <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                    className="bg-purple-600 h-2.5 rounded-full transition-all duration-500 ease-out"
                    style={{ width: `${progress}%` }}
                />
            </div>
        </div>
    );
}
