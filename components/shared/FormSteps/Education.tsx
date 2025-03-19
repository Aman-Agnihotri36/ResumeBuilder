import React, { useState, useCallback } from "react";
import CloseIcon from '@mui/icons-material/Close';
import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import { EducationActions } from "@/lib/redux/education";

export const Education = ({ NextStep, PrevStep }: { NextStep: () => void, PrevStep: () => void }) => {
    interface Education {
        degree: string;
        institution: string;
        graduationDate: string;
        certification: string;
    }

    const dispatch = useAppDispatch()

    const [educations, setEducations] = useState<Education[]>([]);
    const { Education } = useAppSelector(store => store.education)
    const { EduForm } = useAppSelector((store) => store.education)
    console.log('EDUFORM VALUE', EduForm)


    function handleEducationChange(index: number, e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { name, value } = e.target
        dispatch(EducationActions.setEducation({ index, name, value, educations }))

    }


    // Function to add a new education field
    const addEducation = useCallback(() => {
        setEducations((prev) => [
            ...prev,
            { degree: "", institution: "", graduationDate: "", certification: "" },
        ]);

        dispatch(EducationActions.setEduForm())
    }, []);

    // Function to remove an education field
    const removeEducation = useCallback((index: number) => {
        setEducations((prev) => prev.filter((_, i) => i !== index));
        dispatch(EducationActions.setRemove({ index }))
        dispatch(EducationActions.removeEduForm())
    }, []);

    return (
        <div className="max-w-4xl mx-auto w-[100%]">
            <h2 className="text-2xl font-bold mb-6 text-center">Education Details</h2>
            <button type="button" onClick={addEducation} className=" p-2 px-6 rounded-md text-[1.1rem] bg-purple-500 text-white ">
                Add Education
            </button>

            {EduForm?.map((education: any, index: any) => (
                <div key={index} className="relative p-4 mt-5 border rounded-lg mb-4  shadow-lg">
                    <button
                        onClick={() => removeEducation(index)}
                        className="absolute top-2 right-2 text-red-500 hover:text-red-700 transition"
                        title="Remove"
                    >
                        <CloseIcon />
                    </button>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Degree */}
                        <div>
                            <label className="block text-gray-700 font-medium mb-2">Degree</label>
                            <input
                                type="text"
                                name="degree"
                                value={Education[index]?.degree || ""}
                                onChange={(e) => handleEducationChange(index, e)}
                                className="w-full border rounded-lg px-3 py-2"
                            />
                        </div>

                        {/* Institution */}
                        <div>
                            <label className="block text-gray-700 font-medium mb-2">Institution</label>
                            <input
                                type="text"
                                name="institution"
                                value={Education[index]?.institution || ""}
                                onChange={(e) => handleEducationChange(index, e)}
                                className="w-full border rounded-lg px-3 py-2"
                            />
                        </div>

                        {/* Graduation Date */}
                        <div>
                            <label className="block text-gray-700 font-medium mb-2">Graduation Date</label>
                            <input
                                type="date"
                                name="graduationDate"
                                value={Education[index]?.graduationDate || ""}
                                onChange={(e) => handleEducationChange(index, e)}
                                className="w-full border rounded-lg px-3 py-2"
                            />
                        </div>

                        {/* Certification */}
                        <div>
                            <label className="block text-gray-700 font-medium mb-2">Certification</label>
                            <input
                                type="text"
                                value={Education[index]?.certification || ""}
                                name="certification"
                                onChange={(e) => handleEducationChange(index, e)}
                                className="w-full border rounded-lg px-3 py-2"
                            />
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
                    className="bg-purple-500 text-white py-3 px-6 rounded-lg hover:bg-purple-600 transition"
                >
                    Next
                </button>
            </div>
        </div>
    );
};
