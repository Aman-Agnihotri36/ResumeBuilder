'use client'

import { useState } from 'react';


import { StepIndicator } from './StepIndicator';
import { NavigationButton } from './NavigationButton';
import { StepContent } from './StapContent';
import { ProgressBar } from './ProgressBar';
import { steps } from './data';

export function ResumeBuilderWalkthrough() {
    const [currentStep, setCurrentStep] = useState(0);

    const nextStep = () => setCurrentStep((prev) => (prev + 1) % steps.length);
    const prevStep = () => setCurrentStep((prev) => (prev - 1 + steps.length) % steps.length);

    return (
        <section className="w-full py-12 md:py-24 lg:py-32 ">
            <div className="container px-4 md:px-6 mx-auto">
                <h2

                    className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12"
                >
                    Build Your Perfect Resume in 5 Easy Steps
                </h2>
                <div

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
                </div>
            </div>
        </section>
    );
}
