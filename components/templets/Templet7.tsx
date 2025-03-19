"use client";

import type React from "react";
import { useAppSelector } from "@/lib/hooks";
import { Mail, Phone, MapPin, Linkedin, Award, GraduationCap, Briefcase, User, ArrowRight } from "lucide-react";

export default function Templet7() {
    const { size } = useAppSelector(state => state.templet);
    console.log('MY SIZE', size);

    return (
        <div className={`${size ? " w-[100%] px-20 rounded-2xl " : " w-[800px] max-h-[800px] h-[630px] overflow-y-scroll"} rounded-lg`}>
            {/* Header */}
            <header className="p-6 bg-indigo-700 text-white rounded-t-lg">
                <div className="max-w-5xl mx-auto">
                    <h1 className="text-3xl font-bold tracking-tight">ALEX WONG</h1>
                    <h2 className="text-xl mt-1 font-light">Data Scientist & AI Researcher</h2>
                </div>
            </header>

            {/* Contact Bar */}
            <div className="bg-indigo-50 py-3 px-6 border-b border-indigo-100">
                <div className="max-w-5xl mx-auto flex flex-wrap justify-center md:justify-between gap-4 text-sm text-indigo-900">
                    <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4 text-indigo-600" />
                        <span>alex.wong@example.com</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-indigo-600" />
                        <span>(555) 123-4567</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-indigo-600" />
                        <span>Toronto, Canada</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Linkedin className="w-4 h-4 text-indigo-600" />
                        <span>linkedin.com/in/alexwong</span>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="p-6 max-w-5xl mx-auto">
                {/* Professional Summary */}
                <div className="mb-8">
                    <div className="flex items-center gap-2">
                        <div className="bg-indigo-100 p-1.5 rounded-md text-indigo-700"><User size={18} /></div>
                        <h3 className="text-lg font-bold text-indigo-900 tracking-wide">PROFESSIONAL SUMMARY</h3>
                        <div className="flex-grow border-t border-indigo-200 ml-2"></div>
                    </div>
                    <div className="mt-3 text-gray-700 leading-relaxed">
                        <p>
                            Results-driven Data Scientist with 7+ years of experience specializing in machine learning, statistical
                            analysis, and AI research. Proven track record of developing predictive models that drive business value.
                            Expert in Python, R, and TensorFlow with a Ph.D. in Computer Science.
                        </p>
                    </div>
                </div>

                {/* Experience and Education Section */}
                <div className="grid experience grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Experience */}
                    <div className="md:col-span-2">
                        <div className="flex items-center gap-2">
                            <div className="bg-indigo-100 p-1.5 rounded-md text-indigo-700"><Briefcase size={18} /></div>
                            <h3 className="text-lg font-bold text-indigo-900 tracking-wide">PROFESSIONAL EXPERIENCE</h3>
                            <div className="flex-grow border-t border-indigo-200 ml-2"></div>
                        </div>
                        <div className="mt-4 space-y-6">
                            {[{
                                title: "Senior Data Scientist",
                                company: "TechInnovate AI",
                                location: "Toronto, Canada",
                                period: "January 2019 - Present",
                                achievements: [
                                    "Led a team of 5 data scientists in developing machine learning models that increased prediction accuracy by 35%",
                                    "Implemented NLP algorithms for customer sentiment analysis, resulting in a 28% improvement in customer satisfaction metrics",
                                    "Collaborated with product and engineering teams to integrate AI solutions into core business processes, reducing operational costs by $1.2M annually",
                                    "Presented research findings at 3 international AI conferences, establishing company as industry thought leader",
                                ]
                            }, {
                                title: "Data Scientist",
                                company: "DataDriven Solutions",
                                location: "Vancouver, Canada",
                                period: "June 2016 - December 2018",
                                achievements: [
                                    "Developed and deployed fraud detection models that reduced false positives by 40% while maintaining 99.5% detection rate",
                                    "Conducted A/B testing and statistical analyses to optimize marketing strategies, increasing conversion rates by 22%",
                                    "Created interactive data visualizations and dashboards using Tableau, enabling executives to make data-driven decisions",
                                    "Mentored junior data analysts, improving team productivity by 30% within 6 months",
                                ]
                            }].map((exp, index) => (
                                <div key={index} className="rounded-lg border border-gray-100 p-4 hover:shadow-sm transition-shadow">
                                    <div className="mb-2">
                                        <h4 className="text-lg font-semibold text-gray-900">{exp.title}</h4>
                                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                                            <p className="font-medium text-indigo-700">
                                                {exp.company} | {exp.location}
                                            </p>
                                            <p className="text-sm text-gray-500 bg-gray-50 px-3 py-0.5 rounded-full inline-block">{exp.period}</p>
                                        </div>
                                    </div>
                                    <ul className="mt-3 space-y-2 text-gray-700">
                                        {exp.achievements.map((ach, i) => (
                                            <li key={i} className="flex items-start gap-2">
                                                <ArrowRight className="w-4 h-4 text-indigo-500 mt-1 flex-shrink-0" />
                                                <span>{ach}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Education & Skills */}
                    <div className="space-y-8">
                        <div>
                            <div className="flex items-center gap-2">
                                <div className="bg-indigo-100 p-1.5 rounded-md text-indigo-700"><GraduationCap size={18} /></div>
                                <h3 className="text-lg font-bold text-indigo-900 tracking-wide">EDUCATION</h3>
                                <div className="flex-grow border-t border-indigo-200 ml-2"></div>
                            </div>
                            <div className="mt-4 space-y-4">
                                {[{
                                    degree: "Ph.D. in Computer Science",
                                    institution: "University of Toronto",
                                    period: "2012 - 2016",
                                    details: "Specialization in Machine Learning & AI"
                                }, {
                                    degree: "B.Sc. in Statistics",
                                    institution: "University of Waterloo",
                                    period: "2008 - 2012",
                                    details: "Minor in Computer Science"
                                }].map((edu, index) => (
                                    <div key={index} className="border-l-2 border-indigo-200 pl-4 py-1">
                                        <h4 className="font-semibold text-gray-900">{edu.degree}</h4>
                                        <p className="text-indigo-700">{edu.institution}</p>
                                        <p className="text-sm text-gray-500">{edu.period}</p>
                                        <p className="text-sm text-gray-700 mt-1">{edu.details}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center gap-2">
                                <div className="bg-indigo-100 p-1.5 rounded-md text-indigo-700"><Award size={18} /></div>
                                <h3 className="text-lg font-bold text-indigo-900 tracking-wide">SKILLS</h3>
                                <div className="flex-grow border-t border-indigo-200 ml-2"></div>
                            </div>
                            <div className="mt-4 flex flex-wrap gap-2">
                                {["Machine Learning", "Deep Learning", "Python", "TensorFlow", "SQL"].map((skill, i) => (
                                    <span key={i} className="bg-indigo-50 text-indigo-700 border border-indigo-100 px-3 py-1 rounded-md text-sm">{skill}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
