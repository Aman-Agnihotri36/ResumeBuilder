"use client"

import type React from "react"

import { Mail, Phone, MapPin, Linkedin, Award, BookOpen, Briefcase, User } from "lucide-react"
import { useState } from "react"



export default function Templet4() {
    // Use try/catch to handle potential Redux errors
    const [temp] = useState(true)

    //   useEffect(() => {
    //     let tempValue = true
    //     try {
    //       const tempState = useAppSelector ? useAppSelector((state) => state.templet) : { temp: true }
    //       tempValue = tempState?.temp ?? true
    //     } catch (error) {
    //       // Fallback to default value if Redux fails
    //       tempValue = true
    //     }
    //     setTemp(tempValue)
    //   }, [])

    return (
        <div
            className={`${temp ? "w-[600px] h-[630px] overflow-y-scroll" : "w-full"} bg-gradient-to-br from-slate-50 to-slate-100 shadow-xl rounded-lg`}
        >
            {/* Header */}
            <div className="bg-primary text-white p-6 rounded-t-lg">
                <h1 className="text-4xl font-bold tracking-tight">ALEX WONG</h1>
                <h2 className="text-xl font-light mt-1 text-primary-foreground/80">Data Scientist & AI Researcher</h2>
            </div>

            <div className="flex flex-col md:flex-row">
                {/* Left Column */}
                <div className="md:w-1/3 bg-slate-800 text-white p-6">
                    <div className="space-y-6">
                        <ContactSection />
                        <SkillsSection />
                        <EducationSection />
                    </div>
                </div>

                {/* Right Column */}
                <div className="md:w-2/3 p-6 space-y-8">
                    <ProfileSection />
                    <ExperienceSection />

                </div>
            </div>
        </div>
    )
}

function ContactSection() {
    return (
        <div className="space-y-3">
            <SectionTitle icon={<User className="w-5 h-5" />} title="CONTACT" />
            <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-primary-foreground/70" />
                    <span>alex.wong@example.com</span>
                </div>
                <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-primary-foreground/70" />
                    <span>(555) 123-4567</span>
                </div>
                <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary-foreground/70" />
                    <span>Toronto, Canada</span>
                </div>
                <div className="flex items-center gap-2">
                    <Linkedin className="w-4 h-4 text-primary-foreground/70" />
                    <span>in/alexwong</span>
                </div>
            </div>
        </div>
    )
}

function SkillsSection() {
    const skills = [
        "Machine Learning",
        "Deep Learning",
        "Python",
        "R",
        "SQL",
        "TensorFlow",
        "PyTorch",
        "Data Visualization",
        "Statistical Analysis",
        "Big Data Technologies",
    ]

    return (
        <div className="space-y-3">
            <SectionTitle icon={<Award className="w-5 h-5" />} title="SKILLS" />
            <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                    <span key={skill} className="bg-slate-700 px-2 py-1 rounded-md text-xs">
                        {skill}
                    </span>
                ))}
            </div>
        </div>
    )
}

function EducationSection() {
    return (
        <div className="space-y-3">
            <SectionTitle icon={<BookOpen className="w-5 h-5" />} title="EDUCATION" />
            <div className="space-y-4">
                <div>
                    <h4 className="font-medium">Ph.D. in Computer Science</h4>
                    <p className="text-sm text-primary-foreground/80">University of Toronto</p>
                    <p className="text-xs text-primary-foreground/60">2012 - 2016</p>
                </div>
                <div>
                    <h4 className="font-medium">B.Sc. in Statistics</h4>
                    <p className="text-sm text-primary-foreground/80">University of Waterloo</p>
                    <p className="text-xs text-primary-foreground/60">2008 - 2012</p>
                </div>
            </div>
        </div>
    )
}

function ProfileSection() {
    return (
        <div className="space-y-3">
            <SectionTitle icon={<User className="w-5 h-5" />} title="PROFILE" darkMode={false} />
            <p className="text-slate-600 leading-relaxed">
                Innovative data scientist with 7+ years of experience in machine learning, statistical analysis, and AI
                research. Passionate about leveraging data to solve complex problems and drive business decisions. Skilled in
                developing predictive models and implementing cutting-edge AI technologies.
            </p>
        </div>
    )
}

function ExperienceSection() {
    return (
        <div className="space-y-3">
            <SectionTitle icon={<Briefcase className="w-5 h-5" />} title="EXPERIENCE" darkMode={false} />
            <div className="space-y-6">
                <ExperienceItem
                    title="Senior Data Scientist"
                    company="TechInnovate AI"
                    period="2019 - Present"
                    responsibilities={[
                        "Lead a team of data scientists in developing advanced machine learning models for predictive analytics",
                        "Implemented natural language processing algorithms, improving customer sentiment analysis accuracy by 35%",
                        "Collaborated with cross-functional teams to integrate AI solutions into existing business processes",
                    ]}
                />
                <ExperienceItem
                    title="Data Scientist"
                    company="DataDriven Solutions"
                    period="2016 - 2019"
                    responsibilities={[
                        "Developed and deployed machine learning models for fraud detection, reducing false positives by 40%",
                        "Conducted A/B tests and statistical analyses to optimize marketing strategies",
                        "Created data visualizations and dashboards to communicate insights to stakeholders",
                    ]}
                />
            </div>
        </div>
    )
}



function SectionTitle({ icon, title, darkMode = true }: { icon: React.ReactNode; title: string; darkMode?: boolean }) {
    return (
        <div className={`flex items-center gap-2 ${darkMode ? "text-white" : "text-slate-800"}`}>
            {icon}
            <h3 className="font-bold tracking-wider">{title}</h3>
            <div className={`flex-grow h-px ${darkMode ? "bg-primary-foreground/30" : "bg-slate-300"}`}></div>
        </div>
    )
}

function ExperienceItem({
    title,
    company,
    period,
    responsibilities,
}: {
    title: string
    company: string
    period: string
    responsibilities: string[]
}) {
    return (
        <div className="border-l-2 border-primary pl-4 py-1">
            <h4 className="text-lg font-semibold text-slate-800">{title}</h4>
            <p className="text-primary font-medium">{company}</p>
            <p className="text-sm text-slate-500 mb-2">{period}</p>
            <ul className="space-y-1 text-slate-600">
                {responsibilities.map((item, index) => (
                    <li key={index} className="flex items-start">
                        <span className="inline-block w-2 h-2 rounded-full bg-primary mt-1.5 mr-2 flex-shrink-0"></span>
                        <span>{item}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

