import { FileText, Zap, Target, Award, Users, Lock } from 'lucide-react'
import { SimpleCard } from './Card'
import { motion } from "framer-motion";


const features = [
    {
        id: 1,
        icon: <FileText className="h-12 w-12 text-purple-600" />,
        title: "ATS-Friendly Templates",
        description: "Our templates are designed to pass Applicant Tracking Systems with ease."
    },
    {
        id: 2,
        icon: <Zap className="h-12 w-12 text-purple-600" />,
        title: "Quick and Easy",
        description: "Build your professional resume in just minutes with our intuitive interface."
    },
    {
        id: 3,
        icon: <Target className="h-12 w-12 text-purple-600" />,
        title: "Tailored Content",
        description: "Get personalized content suggestions based on your industry and experience."
    },
    {
        id: 4,
        icon: <Award className="h-12 w-12 text-purple-600" />,
        title: "Stand Out",
        description: "Make a lasting impression with our professionally designed templates."
    },
    {
        id: 5,
        icon: <Users className="h-12 w-12 text-purple-600" />,
        title: "Expert Reviewed",
        description: "Our templates and tips are reviewed by HR professionals and industry experts."
    },
    {
        id: 6,
        icon: <Lock className="h-12 w-12 text-purple-600" />,
        title: "Secure & Private",
        description: "Your data is encrypted and never shared. Your privacy is our priority."
    }
]

export const Middle = () => {
    return (
        <div className=" w-full">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-2"
            >
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mt-20 mb-12">Why Choose Our Resume Builder?</h1>
                <div className='flex max-w-7xl mx-auto flex-wrap gap-10 justify-center'>
                    {
                        features.map((one) => {
                            return (
                                <SimpleCard key={one.id} Icon={one.icon} Title={one.title} Description={one.description} />
                            )
                        })
                    }
                </div>
            </motion.div>
        </div>
    )
}