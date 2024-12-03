import { Check, Download, Edit, Globe, Globe2, Mail } from 'lucide-react'
import { Card2 } from './Card2'


const advancedFeatures = [
    {
        id: 1,
        icon: <Edit className="h-8 w-8 text-purple-600" />,
        title: "AI-Powered Content Suggestions",
        description: "Get intelligent suggestions for skills, achievements, and job descriptions tailored to your industry."
    },
    {
        id: 2,
        icon: <Download className="h-8 w-8 text-purple-600" />,
        title: "Multiple Download Formats",
        description: "Export your resume in PDF, DOCX, TXT, or even HTML formats to suit any application requirement."
    },
    {
        id: 3,
        icon: <Globe className="h-8 w-8 text-purple-600" />,
        title: "Online Resume Hosting",
        description: "Get a shareable link to your online resume, perfect for including in emails or on social media."
    },
    {
        id: 4,
        icon: <Mail className="h-8 w-8 text-purple-600" />,
        title: "Cover Letter Builder",
        description: "Create matching cover letters with the same ease and professional design as your resume."
    },
    {
        id: 5,
        icon: <Check className="h-8 w-8 text-purple-600" />,
        title: "ATS Compliance Checker",
        description: "Ensure your resume passes Applicant Tracking Systems with our built-in compliance checker."
    },
    {
        id: 6,
        icon: <Globe2 className="h-8 w-8 text-purple-600" />,
        title: "Multi-Language Support",
        description: "Create resumes in multiple languages to apply for international positions with confidence."
    }
]
export const Last = () => {

    return (
        <div className=" w-full">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mt-15 mb-12">Why Choose Our Resume Builder?</h1>
            <div className='flex max-w-7xl mx-auto flex-wrap gap-10 justify-center'>
                {
                    advancedFeatures.map((one) => {
                        return (
                            <Card2 key={one.id} Icon={one.icon} Title={one.title} Description={one.description} />
                        )
                    })
                }
            </div>
        </div>
    )
}