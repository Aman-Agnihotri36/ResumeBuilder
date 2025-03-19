"use client"

import { useState } from "react"
import { Mail, Phone, MapPin, Linkedin, Award, BookOpen, Code } from "lucide-react"
import { useAppSelector } from "@/lib/hooks"

export default function Templet9() {
    const { size } = useAppSelector(state => state.templet)
    console.log('YOUR SIXEEEE', size)

    return (
        <div className={`${size ? " w-[100%] px-20 rounded-2xl overflow-x-hidden" : " w-[800px] h-[630px] overflow-y-scroll"}   rounded-lg `}>
            <div className="p-8 relative">
                {/* Unique visual element: Diagonal background stripe */}
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-blue-50 to-transparent -z-10 transform -skew-x-12"></div>

                {/* Header Section */}
                <header className="mb-6">
                    <h1 className="text-4xl font-bold text-gray-900 mb-1">Alex Wong</h1>
                    <h2 className="text-xl text-blue-600 font-medium mb-4">Data Scientist & AI Researcher</h2>

                    {/* Contact Information */}
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                            <Mail className="w-4 h-4 text-blue-600" />
                            <span>alex.wong@example.com</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <Phone className="w-4 h-4 text-blue-600" />
                            <span>(555) 123-4567</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4 text-blue-600" />
                            <span>Toronto, Canada</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <Linkedin className="w-4 h-4 text-blue-600" />
                            <span>linkedin.com/in/alexwong</span>
                        </div>
                    </div>
                </header>

                {/* Professional Summary */}
                <section className="mb-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-3 flex items-center">
                        <Award className="w-6 h-6 text-blue-600 mr-2" />
                        Professional Summary
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                        Results-driven Data Scientist with 7+ years of experience specializing in machine learning, statistical
                        analysis, and AI research. Proven track record of developing predictive models that drive business value.
                        Expert in Python, R, and TensorFlow with a Ph.D. in Computer Science.
                    </p>
                </section>

                {/* Experience Section */}
                <section className="mb-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                        <BookOpen className="w-6 h-6 text-blue-600 mr-2" />
                        Professional Experience
                    </h2>

                    <div className="space-y-4">
                        {/* Experience Item 1 */}
                        <div className="border-l-4 border-blue-600 pl-4">
                            <h3 className="font-bold text-gray-800 text-lg">Senior Data Scientist</h3>
                            <p className="text-blue-600 font-medium">TechInnovate AI • Toronto, Canada</p>
                            <p className="text-gray-600 text-sm mb-2">January 2019 - Present</p>
                            <ul className="list-disc pl-5 space-y-1 text-gray-700">
                                <li>
                                    Led a team of 5 data scientists in developing machine learning models that increased prediction
                                    accuracy by 35%
                                </li>
                                <li>
                                    Implemented NLP algorithms for customer sentiment analysis, resulting in a 28% improvement in customer
                                    satisfaction metrics
                                </li>
                                <li>
                                    Collaborated with product and engineering teams to integrate AI solutions into core business
                                    processes, reducing operational costs by $1.2M annually
                                </li>
                                <li>
                                    Presented research findings at 3 international AI conferences, establishing company as industry
                                    thought leader
                                </li>
                            </ul>
                        </div>

                        {/* Experience Item 2 */}
                        <div className="border-l-4 border-blue-600 pl-4">
                            <h3 className="font-bold text-gray-800 text-lg">Data Scientist</h3>
                            <p className="text-blue-600 font-medium">DataDriven Solutions • Vancouver, Canada</p>
                            <p className="text-gray-600 text-sm mb-2">June 2016 - December 2018</p>
                            <ul className="list-disc pl-5 space-y-1 text-gray-700">
                                <li>
                                    Developed and deployed fraud detection models that reduced false positives by 40% while maintaining
                                    99.5% detection rate
                                </li>
                                <li>
                                    Conducted A/B testing and statistical analyses to optimize marketing strategies, increasing conversion
                                    rates by 22%
                                </li>
                                <li>
                                    Created interactive data visualizations and dashboards using Tableau, enabling executives to make
                                    data-driven decisions
                                </li>
                                <li>Mentored junior data analysts, improving team productivity by 30% within 6 months</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Two Column Layout for Education and Skills */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Education Section */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                            <BookOpen className="w-6 h-6 text-blue-600 mr-2" />
                            Education
                        </h2>
                        <div className="space-y-4">
                            <div className="bg-gradient-to-r from-blue-50 to-transparent p-4 rounded-lg">
                                <h3 className="font-bold text-gray-800">Ph.D. in Computer Science</h3>
                                <p className="text-blue-600">University of Toronto</p>
                                <p className="text-gray-600 text-sm">2012 - 2016</p>
                                <p className="text-gray-700 text-sm mt-1">Specialization in Machine Learning & AI</p>
                            </div>
                            <div className="bg-gradient-to-r from-blue-50 to-transparent p-4 rounded-lg">
                                <h3 className="font-bold text-gray-800">B.Sc. in Statistics</h3>
                                <p className="text-blue-600">University of Waterloo</p>
                                <p className="text-gray-600 text-sm">2008 - 2012</p>
                                <p className="text-gray-700 text-sm mt-1">Minor in Computer Science</p>
                            </div>
                        </div>
                    </section>

                    {/* Skills Section */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                            <Code className="w-6 h-6 text-blue-600 mr-2" />
                            Skills
                        </h2>
                        <div className="space-y-4">
                            <div>
                                <h3 className="font-bold text-gray-800 mb-2">Technical</h3>
                                <div className="flex flex-wrap gap-2">
                                    {[
                                        "Machine Learning",
                                        "Deep Learning",
                                        "Natural Language Processing",
                                        "Statistical Analysis",
                                        "Data Visualization",
                                        "Big Data Technologies",
                                    ].map((skill) => (
                                        <span key={skill} className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-800 mb-2">Programming & Tools</h3>
                                <div className="flex flex-wrap gap-2">
                                    {["Python", "R", "SQL", "TensorFlow", "PyTorch", "Tableau"].map((skill) => (
                                        <span key={skill} className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

