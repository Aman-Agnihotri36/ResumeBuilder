'use client'

import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { useAppSelector } from '@/lib/hooks'

const steps = [
    'Personal Info ',
    'Experience',
    'Education',
    'Skill',
    'Summery'
];

export default function TextMobileStepper() {

    const { change } = useAppSelector((state) => state.change)
    console.log('CHANGE VALUE', change)
    return (
        <div className='pb-8'>
            <Box sx={{ width: '100%' }}>
                <Stepper activeStep={change} alternativeLabel>
                    {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
            </Box>
        </div>
    );
}
