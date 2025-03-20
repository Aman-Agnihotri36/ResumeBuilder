import { useAppSelector } from '@/lib/hooks'
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react'



export default function Templet3() {
    const { temp } = useAppSelector(state => state.templet)

    return (
        <div className={`${temp ? 'bg-white shadow-lg w-[600px] h-[630px]  overflow-y-scroll  p-4' : 'bg-white shadow-lg w-full rounded  '}`}>
            <div className="mb-12">
                <h1 className="text-6xl font-extrabold text-gray-900 mb-2">ALEX WONG</h1>
                <h2 className="text-2xl font-light text-gray-600 mb-4">Data Scientist & AI Researcher</h2>
                <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                    <div className="flex items-center">
                        <Mail className="w-4 h-4 mr-2" />
                        alex.wong@example.com
                    </div>
                    <div className="flex items-center">
                        <Phone className="w-4 h-4 mr-2" />
                        (555) 123-4567
                    </div>
                    <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        Toronto, Canada
                    </div>
                    <div className="flex items-center">
                        <Linkedin className="w-4 h-4 mr-2" />
                        in/alexwong
                    </div>
                </div>
            </div>

            <div className="space-y-16">
                <Section title="PROFILE">
                    <p className="text-gray-700 leading-relaxed">
                        Innovative data scientist with 7+ years of experience in machine learning,
                        statistical analysis, and AI research. Passionate about leveraging data to
                        solve complex problems and drive business decisions. Skilled in developing
                        predictive models and implementing cutting-edge AI technologies.
                    </p>
                </Section>

                <Section title="EXPERIENCE">
                    <ExperienceItem
                        title="Senior Data Scientist"
                        company="TechInnovate AI"
                        period="2019 - Present"
                        responsibilities={[
                            "Lead a team of data scientists in developing advanced machine learning models for predictive analytics",
                            "Implemented natural language processing algorithms, improving customer sentiment analysis accuracy by 35%",
                            "Collaborated with cross-functional teams to integrate AI solutions into existing business processes"
                        ]}
                    />
                    <ExperienceItem
                        title="Data Scientist"
                        company="DataDriven Solutions"
                        period="2016 - 2019"
                        responsibilities={[
                            "Developed and deployed machine learning models for fraud detection, reducing false positives by 40%",
                            "Conducted A/B tests and statistical analyses to optimize marketing strategies",
                            "Created data visualizations and dashboards to communicate insights to stakeholders"
                        ]}
                    />
                </Section>

                <div className="flex flex-col md:flex-row gap-16">
                    <div className="md:w-1/2">
                        <Section title="EDUCATION">
                            <div className="mb-4">
                                <h4 className="text-lg font-semibold text-gray-800">Ph.D. in Computer Science</h4>
                                <p className="text-gray-600">University of Toronto</p>
                                <p className="text-sm text-gray-500">2012 - 2016</p>
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold text-gray-800">B.Sc. in Statistics</h4>
                                <p className="text-gray-600">University of Waterloo</p>
                                <p className="text-sm text-gray-500">2008 - 2012</p>
                            </div>
                        </Section>
                    </div>

                    <div className="md:w-1/2">
                        <Section title="SKILLS">
                            <div className="flex flex-wrap gap-2">
                                {['Machine Learning', 'Deep Learning', 'Python', 'R', 'SQL', 'TensorFlow', 'PyTorch', 'Data Visualization', 'Statistical Analysis', 'Big Data Technologies'].map((skill) => (
                                    <span key={skill} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </Section>
                    </div>
                </div>

                <Section title="PUBLICATIONS">
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li>Advancements in Generative Adversarial Networks for Image Synthesis - IEEE Conference on Computer Vision and Pattern Recognition, 2021</li>
                        <li>Optimizing Reinforcement Learning Algorithms for Real-time Decision Making - NeurIPS, 2020</li>
                        <li>Novel Approaches to Sentiment Analysis Using Deep Learning - Journal of Machine Learning Research 2019</li>
                    </ul>
                </Section>
            </div>
        </div>
    )
}
{/* eslint-disable-next-line  @typescript-eslint/no-explicit-any */ }
function Section({ title, children }: { title: any, children: any }) {
    return (
        <section>
            <h3 className="text-xl font-bold text-gray-800 mb-4 border-b border-gray-200 pb-2">{title}</h3>
            {children}
        </section>
    )
}
{/* eslint-disable-next-line  @typescript-eslint/no-explicit-any */ }
function ExperienceItem({ title, company, period, responsibilities }: { title: any, company: any, period: any, responsibilities: any }) {
    return (
        <div className="mb-6">
            <h4 className="text-lg font-semibold text-gray-800">{title}</h4>
            <p className="text-gray-600">{company}</p>
            <p className="text-sm text-gray-500 mb-2">{period}</p>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
                {responsibilities.map((item: any, index: any) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    )
}

