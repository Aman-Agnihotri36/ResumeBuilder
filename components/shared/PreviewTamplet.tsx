'use client'

import { Mail, Phone, MapPin, Building, Calendar } from 'lucide-react';

import { useAppSelector } from '@/lib/hooks';

export function ResumePreview() {

    const Item = useAppSelector(store => store.personalInfo)
    const { Experience } = useAppSelector(store => store.experience)
    const { Education } = useAppSelector(store => store.education)
    const { Skill } = useAppSelector(store => store.skill)
    const { data } = useAppSelector(store => store.summery)
    // console.log("List Your Exp", Education)
    // const { size } = useSelector(state => state.Templet)

    return (
        <div className={'bg-white shadow-lg w-[600px] h-[630px]  overflow-y-scroll  p-4 '}>
            {/* Header */}
            <div className="border-b-2 border-gray-300 pb-6 mb-6">
                <h1 className="text-4xl font-bold text-gray-800">
                    {Item?.firstName} {Item?.lastName}
                </h1>
                <p className="text-xl text-blue-600 mt-1">{Item.title}</p>
                <div className="mt-4 space-y-2 text-gray-600">
                    <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4" />
                        <span>{Item.email}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4" />
                        <span>{Item.phone}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{Item.location}</span>
                    </div>
                </div>
            </div>

            {/* Summary */}

            <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-3">Professional Summary</h2>
                <p className="text-gray-700 whitespace-pre-wrap">{data}</p>
            </div>

            {/* Experience */}


            <div className="mb-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Work Experience</h2>
                <div className="space-y-6">
                    {/* eslint-disable-next-line  @typescript-eslint/no-explicit-any */}
                    {

                        Experience.map((exp: any, index: number) => (
                            <div key={index}>
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="text-xl font-medium text-gray-800">{exp?.jobTitle}</h3>
                                        <div className="flex items-center gap-2 text-gray-600 mt-1">
                                            <Building className="w-4 h-4" />
                                            <span>{exp?.companyName}</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 text-gray-600">
                                        <Calendar className="w-4 h-4" />
                                        {/* <span>{exp?.startDate} - {exp?.endDate || 'Present'}</span> */}
                                    </div>
                                </div>
                                <p className="mt-2 text-gray-700 whitespace-pre-wrap">{exp?.experienceDescription}</p>
                            </div>
                        ))
                    }
                </div>
            </div>



            {/* Education */}

            <div className="mb-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Education</h2>
                <div className="space-y-4">
                    {/* eslint-disable-next-line  @typescript-eslint/no-explicit-any */}
                    {
                        Education.map((edu: any, index: number) => (
                            <div key={index}>
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="text-xl font-medium text-gray-800">{edu.degree}</h3>
                                        <p className="text-gray-600">{edu.institution}</p>
                                        <p className="text-gray-600">{edu.certification}</p>
                                    </div>
                                    <div className="flex items-center gap-2 text-gray-600">
                                        <Calendar className="w-4 h-4" />
                                        <span>{edu.graduationDate || 'Present'}</span>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>


            {/* Skills */}

            <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Skills</h2>
                <div className="flex flex-wrap gap-2">
                    {/* eslint-disable-next-line  @typescript-eslint/no-explicit-any */}
                    {Skill?.map((skill: any, index: number) => (
                        <div
                            key={index}
                            className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                        >
                            • {skill} {skill.level}
                        </div>
                    ))}

                </div>
            </div>

        </div>
    );
}
