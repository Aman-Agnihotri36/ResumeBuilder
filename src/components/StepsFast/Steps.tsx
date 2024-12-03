import { FileText, Wand2, BarChart, Download } from 'lucide-react';
import { Step } from './types.ts';

export const steps: Step[] = [
    {
        title: "Choose a Template",
        description: "Select from our wide range of professional templates.",
        icon: <FileText className="h-12 w-12 text-purple-600" />
    },
    {
        title: "Fill in Your Details",
        description: "Enter your personal information, work history, and skills.",
        icon: <FileText className="h-12 w-12 text-purple-600" />
    },
    {
        title: "AI Enhancement",
        description: "Our AI suggests improvements to make your resume stand out.",
        icon: <Wand2 className="h-12 w-12 text-purple-600" />
    },
    {
        title: "ATS Optimization",
        description: "We ensure your resume is optimized for Applicant Tracking Systems.",
        icon: <BarChart className="h-12 w-12 text-purple-600" />
    },
    {
        title: "Download & Share",
        description: "Get your polished resume in multiple formats, ready to send.",
        icon: <Download className="h-12 w-12 text-purple-600" />
    }
];