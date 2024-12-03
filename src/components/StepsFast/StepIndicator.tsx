interface StepIndicatorProps {
    current: number;
    total: number;
}

export function StepIndicator({ current, total }: StepIndicatorProps) {
    return (
        <div className="text-sm font-medium text-gray-600">
            Step {current} of {total}
        </div>
    );
}