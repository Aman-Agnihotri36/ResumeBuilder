"use client"

import type React from "react"
import { useState } from "react"
import { Mail, Phone, MapPin, Linkedin, Award, GraduationCap, Briefcase, User, CheckCircle2 } from "lucide-react"
import { useAppSelector } from "@/lib/hooks"

export default function Templet6() {
    const { size } = useAppSelector(state => state.templet)

    return (
        <div className={`${size ? " w-[100%] break-inside-avoid px-20 rounded-2xl overflow-x-hidden" : " w-[800px] h-[630px] overflow-y-scroll"}   rounded-lg `}>
            {/* Header Section */}
            <header className="p-8 bg-slate-50 border-b border-slate-200 rounded-t-lg">
                <div className="flex flex-col md:flex-row justify-between gap-4">
                    <div>
                        <h1 className="text-3xl font-bold text-slate-800">ALEX WONG</h1>
                        <h2 className="text-xl font-medium text-slate-600 mt-1">Data Scientist & AI Researcher</h2>
                    </div>
                    <ContactInfo />
                </div>
            </header>

            <div className="p-8">
                {/* Summary Section */}
                <SummarySection />

                {/* Two Column Layout */}
                <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Main Column */}
                    <div className="lg:col-span-8 space-y-8">
                        <ExperienceSection />
                    </div>

                    {/* Side Column */}
                    <div className="lg:col-span-4 space-y-8">
                        <EducationSection />
                        <SkillsSection />
                    </div>
                </div>
            </div>
        </div>
    )
}

function ContactInfo() {
    return (
        <div className="flex flex-col gap-2 text-sm text-slate-700">
            <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-slate-500" />
                <span>alex.wong@example.com</span>
            </div>
            <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-slate-500" />
                <span>(555) 123-4567</span>
            </div>
            <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-slate-500" />
                <span>Toronto, Canada</span>
            </div>
            <div className="flex items-center gap-2">
                <Linkedin className="w-4 h-4 text-slate-500" />
                <span>linkedin.com/in/alexwong</span>
            </div>
        </div>
    )
}

function SummarySection() {
    return (
        <section>
            <SectionHeader icon={<User className="w-5 h-5 text-slate-600" />} title="PROFESSIONAL SUMMARY" />
            <div className="mt-3 text-slate-700 leading-relaxed">
                <p>
                    Results-driven Data Scientist with 7+ years of experience specializing in machine learning, statistical
                    analysis, and AI research. Proven track record of developing predictive models that drive business value.
                    Expert in Python, R, and TensorFlow with a Ph.D. in Computer Science.
                </p>
            </div>
        </section>
    )
}

function SectionHeader({ icon, title }: { icon: React.ReactNode; title: string }) {
    return (
        <div className="flex items-center gap-2 border-b border-slate-200 pb-2">
            <div className="text-slate-600">{icon}</div>
            <h3 className="text-lg font-bold text-slate-800">{title}</h3>
        </div>
    )
}

function ExperienceSection() {
    return (
        <section>
            <SectionHeader icon={<Briefcase className="w-5 h-5 text-slate-600" />} title="PROFESSIONAL EXPERIENCE" />
            <div className="mt-4 space-y-6">
                <ExperienceItem
                    title="Senior Data Scientist"
                    company="TechInnovate AI"
                    location="Toronto, Canada"
                    period="January 2019 - Present"
                    achievements={[
                        "Led a team of 5 data scientists in developing machine learning models that increased prediction accuracy by 35%",
                        "Implemented NLP algorithms for customer sentiment analysis, resulting in a 28% improvement in customer satisfaction metrics",
                        "Collaborated with product and engineering teams to integrate AI solutions into core business processes, reducing operational costs by $1.2M annually",
                        "Presented research findings at 3 international AI conferences, establishing company as industry thought leader",
                    ]}
                />
                <ExperienceItem
                    title="Data Scientist"
                    company="DataDriven Solutions"
                    location="Vancouver, Canada"
                    period="June 2016 - December 2018"
                    achievements={[
                        "Developed and deployed fraud detection models that reduced false positives by 40% while maintaining 99.5% detection rate",
                        "Conducted A/B testing and statistical analyses to optimize marketing strategies, increasing conversion rates by 22%",
                        "Created interactive data visualizations and dashboards using Tableau, enabling executives to make data-driven decisions",
                        "Mentored junior data analysts, improving team productivity by 30% within 6 months",
                    ]}
                />
            </div>
        </section>
    )
}

function ExperienceItem({
    title,
    company,
    location,
    period,
    achievements,
}: {
    title: string
    company: string
    location: string
    period: string
    achievements: string[]
}) {
    return (
        <div className="pb-2">
            <div className="mb-2">
                <h4 className="text-lg font-semibold text-slate-800">{title}</h4>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                    <div>
                        <p className="font-medium text-slate-700">
                            {company} | {location}
                        </p>
                    </div>
                    <p className="text-sm text-slate-600">{period}</p>
                </div>
            </div>
            <ul className="mt-3 space-y-2 text-slate-700">
                {achievements.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-slate-500 mt-1 flex-shrink-0" />
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
            <SectionHeader icon={<GraduationCap className="w-5 h-5 text-slate-600" />} title="EDUCATION" />
            <div className="mt-4 space-y-4">
                <div className="pb-2">
                    <h4 className="font-semibold text-slate-800">Ph.D. in Computer Science</h4>
                    <p className="text-slate-700">University of Toronto</p>
                    <p className="text-sm text-slate-600">2012 - 2016</p>
                    <p className="text-sm text-slate-700 mt-1">Specialization in Machine Learning & AI</p>
                </div>
                <div className="pb-2">
                    <h4 className="font-semibold text-slate-800">B.Sc. in Statistics</h4>
                    <p className="text-slate-700">University of Waterloo</p>
                    <p className="text-sm text-slate-600">2008 - 2012</p>
                    <p className="text-sm text-slate-700 mt-1">Minor in Computer Science</p>
                </div>
            </div>
        </section>
    )
}

function SkillsSection() {
    const skills = {
        technical: [
            "Machine Learning",
            "Deep Learning",
            "Natural Language Processing",
            "Statistical Analysis",
            "Data Visualization",
            "Big Data Technologies",
        ],
        programming: ["Python", "R", "SQL", "TensorFlow", "PyTorch", "Tableau"],
    }

    return (
        <section>
            <SectionHeader icon={<Award className="w-5 h-5 text-slate-600" />} title="SKILLS" />
            <div className="mt-4 space-y-4">
                <div>
                    <h4 className="font-semibold text-slate-700 mb-2">Technical</h4>
                    <div className="flex flex-wrap gap-2">
                        {skills.technical.map((skill) => (
                            <span key={skill} className="bg-slate-100 text-slate-700 px-3 py-1 rounded-md text-sm">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
                <div>
                    <h4 className="font-semibold text-slate-700 mb-2">Programming & Tools</h4>
                    <div className="flex flex-wrap gap-2">
                        {skills.programming.map((skill) => (
                            <span key={skill} className="bg-slate-100 text-slate-700 px-3 py-1 rounded-md text-sm">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

