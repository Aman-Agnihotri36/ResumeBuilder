"use client"
import { useState } from "react"
import { Mail, Phone, MapPin, Linkedin } from "lucide-react"
import { useAppSelector } from "@/lib/hooks"

export default function Templet8() {
    const { size } = useAppSelector(state => state.templet)

    return (
        <div className={`${size ? " w-[100%] px-20 rounded-2xl overflow-x-hidden" : " w-[800px] h-[630px] overflow-y-scroll"}   rounded-lg `}>
            <div className="max-w-4xl mx-auto p-8">
                {/* Header Section */}
                <header className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 uppercase tracking-wider">Alex Wong</h1>
                    <h2 className="text-xl text-gray-600 mt-1">Data Scientist & AI Researcher</h2>

                    {/* Contact Information */}
                    <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                            <Mail className="w-4 h-4" />
                            <span>alex.wong@example.com</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <Phone className="w-4 h-4" />
                            <span>(555) 123-4567</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            <span>Toronto, Canada</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <Linkedin className="w-4 h-4" />
                            <span>linkedin.com/in/alexwong</span>
                        </div>
                    </div>
                </header>

                {/* Divider */}
                <hr className="border-t border-gray-200 my-6" />

                {/* Professional Summary */}
                <section className="mb-8">
                    <h2 className="text-lg font-bold text-gray-900 uppercase mb-3">Professional Summary</h2>
                    <p className="text-gray-700">
                        Results-driven Data Scientist with 7+ years of experience specializing in machine learning, statistical
                        analysis, and AI research. Proven track record of developing predictive models that drive business value.
                        Expert in Python, R, and TensorFlow with a Ph.D. in Computer Science.
                    </p>
                </section>

                {/* Experience Section */}
                <section className="mb-8">
                    <h2 className="text-lg font-bold text-gray-900 uppercase mb-4">Professional Experience</h2>

                    <div className="space-y-6">
                        {/* Experience Item 1 */}
                        <div>
                            <div className="flex flex-col sm:flex-row sm:justify-between mb-1">
                                <h3 className="font-bold text-gray-800">Senior Data Scientist</h3>
                                <span className="text-gray-600 text-sm">January 2019 - Present</span>
                            </div>
                            <p className="text-gray-700 mb-2">TechInnovate AI • Toronto, Canada</p>
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
                        <div>
                            <div className="flex flex-col sm:flex-row sm:justify-between mb-1">
                                <h3 className="font-bold text-gray-800">Data Scientist</h3>
                                <span className="text-gray-600 text-sm">June 2016 - December 2018</span>
                            </div>
                            <p className="text-gray-700 mb-2">DataDriven Solutions • Vancouver, Canada</p>
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Education Section */}
                    <section>
                        <h2 className="text-lg font-bold text-gray-900 uppercase mb-4">Education</h2>
                        <div className="space-y-4">
                            <div>
                                <h3 className="font-bold text-gray-800">Ph.D. in Computer Science</h3>
                                <p className="text-gray-700">University of Toronto</p>
                                <p className="text-gray-600 text-sm">2012 - 2016</p>
                                <p className="text-gray-700 text-sm mt-1">Specialization in Machine Learning & AI</p>
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-800">B.Sc. in Statistics</h3>
                                <p className="text-gray-700">University of Waterloo</p>
                                <p className="text-gray-600 text-sm">2008 - 2012</p>
                                <p className="text-gray-700 text-sm mt-1">Minor in Computer Science</p>
                            </div>
                        </div>
                    </section>

                    {/* Skills Section */}
                    <section>
                        <h2 className="text-lg font-bold text-gray-900 uppercase mb-4">Skills</h2>
                        <div className="space-y-4">
                            <div>
                                <h3 className="font-bold text-gray-800 mb-2">Technical</h3>
                                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                                    <li>Machine Learning</li>
                                    <li>Deep Learning</li>
                                    <li>Natural Language Processing</li>
                                    <li>Statistical Analysis</li>
                                    <li>Data Visualization</li>
                                    <li>Big Data Technologies</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-800 mb-2">Programming & Tools</h3>
                                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                                    <li>Python</li>
                                    <li>R</li>
                                    <li>SQL</li>
                                    <li>TensorFlow</li>
                                    <li>PyTorch</li>
                                    <li>Tableau</li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

