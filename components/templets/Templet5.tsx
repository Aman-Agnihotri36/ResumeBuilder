"use client"

import type React from "react"

import { Mail, Phone, MapPin, Linkedin, Award, BookOpen, Briefcase, ChevronRight } from "lucide-react"
import { useState } from "react"




export default function Templet5() {
    // Safe Redux state access
    const [tempFromRedux] = useState<boolean | null>(null)



    // Use a fallback value while waiting for the Redux state to load
    const temp = tempFromRedux ?? true

    return (
        <div className={`${temp ? "w-[600px] h-[630px] overflow-y-scroll" : "w-full"} bg-white shadow-lg rounded-lg`}>
            {/* Header */}
            <header className="p-8 border-b border-neutral-200">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                    <div>
                        <h1 className="text-4xl font-light text-neutral-800">
                            ALEX <span className="font-bold">WONG</span>
                        </h1>
                        <h2 className="text-xl text-emerald-600 mt-1">Data Scientist & AI Researcher</h2>
                    </div>
                    <ContactBar />
                </div>
            </header>

            <div className="p-8">
                {/* Profile */}
                <ProfileSection />

                {/* Main Content */}
                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Left Column */}
                    <div className="md:col-span-2 space-y-8">
                        <ExperienceSection />

                    </div>

                    {/* Right Column */}
                    <div className="space-y-8">
                        <EducationSection />
                        <SkillsSection />
                    </div>
                </div>
            </div>
        </div>
    )
}

function ContactBar() {
    return (
        <div className="flex flex-wrap gap-4 text-sm text-neutral-600">
            <div className="flex items-center gap-1">
                <Mail className="w-4 h-4 text-emerald-600" />
                <span>alex.wong@example.com</span>
            </div>
            <div className="flex items-center gap-1">
                <Phone className="w-4 h-4 text-emerald-600" />
                <span>(555) 123-4567</span>
            </div>
            <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4 text-emerald-600" />
                <span>Toronto, Canada</span>
            </div>
            <div className="flex items-center gap-1">
                <Linkedin className="w-4 h-4 text-emerald-600" />
                <span>in/alexwong</span>
            </div>
        </div>
    )
}

function ProfileSection() {
    return (
        <div className="bg-neutral-50 p-6 rounded-lg border-l-4 border-emerald-500">
            <p className="text-neutral-700 leading-relaxed">
                Innovative data scientist with 7+ years of experience in machine learning, statistical analysis, and AI
                research. Passionate about leveraging data to solve complex problems and drive business decisions. Skilled in
                developing predictive models and implementing cutting-edge AI technologies.
            </p>
        </div>
    )
}

function SectionHeader({ icon, title }: { icon: React.ReactNode; title: string }) {
    return (
        <div className="flex items-center gap-2 mb-4">
            <div className="bg-emerald-100 p-2 rounded-md">{icon}</div>
            <h3 className="text-lg font-bold text-neutral-800">{title}</h3>
        </div>
    )
}

function ExperienceSection() {
    return (
        <section>
            <SectionHeader icon={<Briefcase className="w-5 h-5 text-emerald-600" />} title="EXPERIENCE" />
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
        </section>
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
        <div className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[2px] before:bg-neutral-200">
            <div className="absolute left-[-5px] top-1 w-3 h-3 rounded-full bg-emerald-500"></div>
            <div className="mb-1">
                <h4 className="text-lg font-semibold text-neutral-800">{title}</h4>
                <div className="flex justify-between items-center">
                    <p className="text-emerald-600">{company}</p>
                    <p className="text-sm text-neutral-500 bg-neutral-100 px-2 py-1 rounded-full">{period}</p>
                </div>
            </div>
            <ul className="mt-3 space-y-2 text-neutral-700">
                {responsibilities.map((item, index) => (
                    <li key={index} className="flex items-start">
                        <ChevronRight className="w-4 h-4 text-emerald-500 mt-1 mr-1 flex-shrink-0" />
                        <span>{item}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

function EducationSection() {
    return (
        <section>
            <SectionHeader icon={<BookOpen className="w-5 h-5 text-emerald-600" />} title="EDUCATION" />
            <div className="space-y-4 pl-2">
                <div className="relative pl-4 border-l-2 border-neutral-200 py-1">
                    <h4 className="font-semibold text-neutral-800">Ph.D. in Computer Science</h4>
                    <p className="text-emerald-600">University of Toronto</p>
                    <p className="text-sm text-neutral-500">2012 - 2016</p>
                </div>
                <div className="relative pl-4 border-l-2 border-neutral-200 py-1">
                    <h4 className="font-semibold text-neutral-800">B.Sc. in Statistics</h4>
                    <p className="text-emerald-600">University of Waterloo</p>
                    <p className="text-sm text-neutral-500">2008 - 2012</p>
                </div>
            </div>
        </section>
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
        <section>
            <SectionHeader icon={<Award className="w-5 h-5 text-emerald-600" />} title="SKILLS" />
            <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                    <span
                        key={skill}
                        className="bg-neutral-100 text-neutral-700 border border-neutral-200 px-3 py-1 rounded-full text-sm"
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </section>
    )
}

