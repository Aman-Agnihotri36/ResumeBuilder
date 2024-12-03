import { motion } from 'framer-motion';
import { Step } from './types.ts';

interface StepContentProps {
    step: Step;
}

export function StepContent({ step }: StepContentProps) {
    return (
        <motion.div
            key={step.title}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="flex flex-col md:flex-row items-center gap-8"
        >
            <div className="flex-shrink-0">
                <div className="w-24 h-24 rounded-full bg-purple-100 flex items-center justify-center">
                    {step.icon}
                </div>
            </div>
            <div className="flex-grow text-center md:text-left">
                <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
            </div>
        </motion.div>
    );
}