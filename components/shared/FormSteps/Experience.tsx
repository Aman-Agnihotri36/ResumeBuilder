import React, { useState } from "react";

import CloseIcon from '@mui/icons-material/Close';

import { useAppDispatch, useAppSelector } from '@/lib/hooks'

import { ExperienceActions } from "@/lib/redux/experience";


export const Experience = ({ NextStep, PrevStep }: { NextStep: () => void; PrevStep: () => void }) => {
    const dispatch = useAppDispatch()
    const [experiences, setExperiences] = useState<{ jobTitle: string; companyName: string; experienceDescription: string }[]>([]);
    const { ExpForm } = useAppSelector((store) => store.experience)
    console.log('YOUR EXPFORM', ExpForm)
    const { Experience } = useAppSelector(store => store.experience)

    // Function to add a new experience field
    const addExperience = () => {

        setExperiences(prevExperiences => [
            ...prevExperiences,
            { jobTitle: "", companyName: "", experienceDescription: "" },

        ]);

        dispatch(ExperienceActions.setExPForm())

    };

    function handleExperienceChange(index: number, e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { name, value } = e.target
        dispatch(ExperienceActions.setExperience({ index, name, value, experiences }))

    }

    // Function to remove an experience field
    const removeExperience = (index: number) => {
        const updatedExperiences = experiences.filter((_, i) => i !== index);
        setExperiences(updatedExperiences);
        dispatch(ExperienceActions.setRemove({ index }))
        dispatch(ExperienceActions.removeExPForm())
    };

    return (
        <div className="max-w-4xl mx-auto w-[100%]">
            <h2 className="text-2xl font-bold mb-6 text-center">Work Experience</h2>
            <button type="button" onClick={addExperience} className="p-2 px-6 rounded-md text-[1.1rem] bg-purple-500 text-white">
                Add Experience
            </button>
            {/* eslint-disable-next-line  @typescript-eslint/no-explicit-any */}
            {ExpForm.map((experience: any, index: any) => (
                <div key={index} className="relative p-4 mt-5 border rounded-lg mb-4  shadow-lg">
                    {/* Cross button for removing experience */}
                    <button
                        onClick={() => removeExperience(index)}
                        type="button"
                        className="absolute top-2 right-2 text-red-500 hover:text-red-700 transition"
                        title="Remove"
                    >
                        <CloseIcon />
                    </button>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Job Title */}
                        <div>
                            <label className="block text-gray-700 font-medium mb-2">Job Title</label>
                            <input
                                type="text"
                                placeholder="Enter your job title"
                                name="jobTitle"
                                value={Experience[index]?.jobTitle || ""}
                                onChange={(e) => handleExperienceChange(index, e)}
                                className="w-full border rounded-lg px-3 py-2"
                            />
                        </div>

                        {/* Company Name */}
                        <div>
                            <label className="block text-gray-700 font-medium mb-2">Company Name</label>
                            <input
                                type="text"
                                placeholder="Enter the company name"
                                name="companyName"
                                value={Experience[index]?.companyName || ""}
                                onChange={(e) => handleExperienceChange(index, e)}
                                className="w-full border rounded-lg px-3 py-2"
                            />
                        </div>

                        {/* Experience Description */}
                        <div className="col-span-2">
                            <label className="block text-gray-700 font-medium mb-2">Experience Description</label>
                            <textarea
                                placeholder="Describe your experience"
                                name="experienceDescription"
                                value={Experience[index]?.experienceDescription || ""}
                                onChange={(e) => handleExperienceChange(index, e)}
                                className="w-full border rounded-lg px-3 py-2"
                            ></textarea>

                        </div>
                    </div>
                </div>
            ))}

            <div className="flex justify-between mt-6">
                <button
                    type="button"
                    onClick={PrevStep}
                    className="bg-gray-500 text-white py-3 px-6 rounded-lg hover:bg-gray-600 transition"
                >
                    Back
                </button>

                <button
                    type="button"
                    onClick={NextStep}
                    className=" bg-purple-500 text-white py-3 px-6 rounded-lg hover:bg-purple-600 transition"
                >
                    Next
                </button>
            </div>
        </div>
    );
};
