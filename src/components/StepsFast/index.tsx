import { useState } from 'react';
import { motion } from 'framer-motion';

import { StepIndicator } from './StepIndicator.tsx';
import { NavigationButton } from './NavigationButton.tsx';
import { StepContent } from './StepContent.tsx';
import { ProgressBar } from './ProgressBar.tsx';
import { steps } from './Steps.tsx';

export function ResumeBuilderWalkthrough() {
    const [currentStep, setCurrentStep] = useState(0);

    const nextStep = () => setCurrentStep((prev) => (prev + 1) % steps.length);
    const prevStep = () => setCurrentStep((prev) => (prev - 1 + steps.length) % steps.length);

    return (
        <section className="w-full py-12 md:py-24 lg:py-32 ">
            <div className="container px-4 md:px-6 mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12"
                >
                    Build Your Perfect Resume in 5 Easy Steps
                </motion.h2>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="relative"
                >
                    <div className="w-full max-w-4xl mx-auto bg-white rounded-lg shadow-lg">
                        <div className="p-6">
                            <div className="flex items-center justify-between mb-8">
                                <NavigationButton
                                    direction="prev"
                                    onClick={prevStep}
                                    disabled={currentStep === 0}
                                />
                                <StepIndicator current={currentStep + 1} total={steps.length} />
                                <NavigationButton
                                    direction="next"
                                    onClick={nextStep}
                                    disabled={currentStep === steps.length - 1}
                                />
                            </div>
                            <StepContent step={steps[currentStep]} />
                            <ProgressBar current={currentStep + 1} total={steps.length} />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}