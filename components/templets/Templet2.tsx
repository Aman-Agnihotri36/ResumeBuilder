import { useAppSelector } from '@/lib/hooks'
import { Mail, Phone, MapPin, Linkedin, User, Briefcase, GraduationCap, Code } from 'lucide-react'
import { useSelector } from 'react-redux'

export default function Templet2() {
    const { temp } = useAppSelector(state => state.templet)

    return (

        <div className={`${temp ? 'bg-white shadow-lg w-[600px] h-[630px]  overflow-y-scroll  p-4' : 'bg-white shadow-lg w-full rounded  '}`}>
            <header className="bg-teal-600 text-white p-6">
                <h1 className="text-3xl font-bold">Sam Taylor</h1>
                <h2 className="text-xl mt-2">Product Manager</h2>
            </header>

            <div className="p-6">
                <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600">
                    <div className="flex items-center">
                        <Mail className="w-4 h-4 mr-2 text-teal-600" />
                        sam.taylor@example.com
                    </div>
                    <div className="flex items-center">
                        <Phone className="w-4 h-4 mr-2 text-teal-600" />
                        (555) 987-6543
                    </div>
                    <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2 text-teal-600" />
                        Austin, TX
                    </div>
                    <div className="flex items-center">
                        <Linkedin className="w-4 h-4 mr-2 text-teal-600" />
                        in/samtaylor
                    </div>
                </div>

                <section className="mb-6">
                    <h3 className="text-xl font-semibold text-teal-600 mb-2 flex items-center">
                        <User className="w-5 h-5 mr-2" /> About Me
                    </h3>
                    <p className="text-gray-700">
                        Results-driven product manager with 7+ years of experience in tech.
                        Skilled in agile methodologies, user-centered design, and data-driven decision making.
                        Passionate about creating products that solve real-world problems and delight users.
                    </p>
                </section>

                <section className="mb-6">
                    <h3 className="text-xl font-semibold text-teal-600 mb-2 flex items-center">
                        <Briefcase className="w-5 h-5 mr-2" /> Experience
                    </h3>
                    <div className="mb-4">
                        <h4 className="text-lg font-medium text-gray-800">Senior Product Manager - TechGrowth Inc.</h4>
                        <p className="text-gray-600 text-sm">January 2019 - Present</p>
                        <ul className="list-disc list-inside text-gray-700 mt-2">
                            <li>Led the development of a new SaaS platform, resulting in $2M ARR within the first year</li>
                            <li>Implemented OKR framework, improving team productivity by 30%</li>
                            <li>Conducted user research and A/B testing to optimize product features</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-medium text-gray-800">Product Manager - InnovateSoft</h4>
                        <p className="text-gray-600 text-sm">March 2016 - December 2018</p>
                        <ul className="list-disc list-inside text-gray-700 mt-2">
                            <li>Managed the product roadmap for a mobile app with 500K+ users</li>
                            <li>Collaborated with UX team to redesign core features, increasing user engagement by 40%</li>
                            <li>Prioritized backlog and led sprint planning sessions with development team</li>
                        </ul>
                    </div>
                </section>

                <section className="mb-6">
                    <h3 className="text-xl font-semibold text-teal-600 mb-2 flex items-center">
                        <GraduationCap className="w-5 h-5 mr-2" /> Education
                    </h3>
                    <div>
                        <h4 className="text-lg font-medium text-gray-800">MBA, Technology Management</h4>
                        <p className="text-gray-600 text-sm">University of Innovation, Graduated 2016</p>
                    </div>
                </section>

                <section>
                    <h3 className="text-xl font-semibold text-teal-600 mb-2 flex items-center">
                        <Code className="w-5 h-5 mr-2" /> Skills
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {['Agile/Scrum', 'User Stories', 'Product Strategy', 'Data Analysis', 'A/B Testing', 'Wireframing', 'SQL', 'Jira', 'Google Analytics', 'Presentation'].map((skill) => (
                            <span key={skill} className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm">
                                {skill}
                            </span>
                        ))}
                    </div>
                </section>
            </div>
        </div>

    )
}

