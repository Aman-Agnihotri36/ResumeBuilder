import { ChevronLeft, ChevronRight } from 'lucide-react';

interface NavigationButtonProps {
    direction: 'prev' | 'next';
    onClick: () => void;
    disabled: boolean;
}

export function NavigationButton({ direction, onClick, disabled }: NavigationButtonProps) {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className="px-4 py-2 rounded-md border border-gray-200 flex items-center gap-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
            {direction === 'prev' && <ChevronLeft className="h-4 w-4" />}
            {direction === 'prev' ? 'Previous' : 'Next'}
            {direction === 'next' && <ChevronRight className="h-4 w-4" />}
        </button>
    );
}