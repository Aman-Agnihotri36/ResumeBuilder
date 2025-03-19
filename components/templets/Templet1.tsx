'use client'
import { useAppSelector } from '@/lib/hooks'
import { Mail, Phone, MapPin, Globe } from 'lucide-react'


export default function Templet1() {

    const { temp } = useAppSelector(state => state.templet)

    // console.log('YOUR SIZE', size)

    return (
        <div className={`${temp ? 'bg-white shadow-lg w-[600px] h-[630px]  overflow-y-scroll  p-4 ' : 'bg-white shadow-lg w-[75%] rounded p-8  '}`}>
            <header className="mb-8">
                <h1 className="text-4xl font-bold text-gray-800 mb-2">John Doe</h1>
                <h2 className="text-xl text-gray-600 mb-4">Senior Software Engineer</h2>
                <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                    <div className="flex items-center">
                        <Mail className="w-4 h-4 mr-2" />
                        john.doe@example.com
                    </div>
                    <div className="flex items-center">
                        <Phone className="w-4 h-4 mr-2" />
                        (123) 456-7890
                    </div>
                    <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        San Francisco, CA
                    </div>
                    <div className="flex items-center">
                        <Globe className="w-4 h-4 mr-2" />
                        johndoe.com
                    </div>
                </div>
            </header>

            <section className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2 pb-2 border-b border-gray-300">Summary</h3>
                <p className="text-gray-700">
                    Experienced software engineer with a strong background in developing scalable and efficient web applications.
                    Skilled in JavaScript, React, Node.js, and cloud technologies. Passionate about creating user-friendly interfaces
                    and optimizing application performance.
                </p>
            </section>

            <section className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2 pb-2 border-b border-gray-300">Experience</h3>
                <div className="mb-4">
                    <h4 className="text-xl font-medium text-gray-800">Senior Software Engineer</h4>
                    <p className="text-gray-600 mb-2">TechCorp Inc. | 2018 - Present</p>
                    <ul className="list-disc list-inside text-gray-700">
                        <li>Led the development of a high-traffic e-commerce platform using React and Node.js</li>
                        <li>Implemented CI/CD pipelines, reducing deployment time by 40%</li>
                        <li>Mentored junior developers and conducted code reviews</li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-xl font-medium text-gray-800">Software Engineer</h4>
                    <p className="text-gray-600 mb-2">WebSolutions Co. | 2015 - 2018</p>
                    <ul className="list-disc list-inside text-gray-700">
                        <li>Developed and maintained multiple client websites using JavaScript and PHP</li>
                        <li>Optimized database queries, improving application response time by 30%</li>
                        <li>Collaborated with the design team to implement responsive UI designs</li>
                    </ul>
                </div>
            </section>

            <section className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2 pb-2 border-b border-gray-300">Education</h3>
                <div>
                    <h4 className="text-xl font-medium text-gray-800">Bachelor of Science in Computer Science</h4>
                    <p className="text-gray-600">University of Technology | 2011 - 2015</p>
                </div>
            </section>

            <section>
                <h3 className="text-2xl font-semibold text-gray-800 mb-2 pb-2 border-b border-gray-300">Skills</h3>
                <ul className="flex flex-wrap gap-2">
                    {['JavaScript', 'React', 'Node.js', 'TypeScript', 'HTML/CSS', 'Git', 'AWS', 'Docker', 'GraphQL', 'MongoDB'].map((skill) => (
                        <li key={skill} className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm">
                            {skill}
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    )
}

