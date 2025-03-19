// eslint-disable-next-line  @typescript-eslint/no-explicit-any
export function StepIndicator({ current, total }: { current: any, total: any }) {
    return (
        <div className="text-sm font-medium text-gray-600">
            Step {current} of {total}
        </div>
    );
}
