import React, { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import { SkillActions } from "@/lib/redux/skills";



export const Skills = ({ NextStep, PrevStep }: { NextStep: () => void, PrevStep: () => void }) => {
    const { Skill } = useAppSelector((store) => store.skill)

    const dispatch = useAppDispatch()
    const [manualSkill, setManualSkill] = useState("");

    const addManualSkill = () => {
        if (manualSkill.trim() !== "") {

            dispatch(SkillActions.setSkill({ talent: manualSkill }))
            setManualSkill("");
        }
    };

    const removeSkill = (index: number) => {

        dispatch(SkillActions.setRemove({ index }))

    };



    return (
        <div >
            <h2 className="text-2xl font-bold mb-4 text-center">Skills</h2>

            <div className="flex gap-6">
                {/* eslint-disable-next-line  @typescript-eslint/no-explicit-any */}
                {Skill.map((one: any, index: number) => (
                    <div key={index} className=" flex bg-purple-100 rounded-2xl gap-5 px-4 py-1">
                        {one}
                        <button
                            onClick={() => removeSkill(index)}
                            type="button"
                            className=" top-2 right-2 text-red-500 hover:text-red-700 transition"
                            title="Remove"
                        >
                            <CloseIcon />
                        </button>
                    </div>
                ))}
            </div>

            {/* Skill input section below the displayed skills */}
            <div className="mb-4 mt-4">

                <label className="block text-gray-700 mb-2">Add Your Skill</label>
                <div className="flex">
                    <input
                        type="text"
                        value={manualSkill}
                        onChange={(e) => setManualSkill(e.target.value)}
                        className="w-full border rounded-lg px-3 py-2 mr-2"
                    />
                    <button onClick={addManualSkill} type="button" className=" p-2 px-6 rounded-md text-[1.1rem] bg-purple-500 text-white ">
                        Add

                    </button>
                </div>
            </div>

            {/* Buttons for navigation */}
            <div className="flex justify-between mt-4">
                <button
                    type="button"
                    onClick={PrevStep}
                    className="bg-gray-500 text-white py-3 px-6 rounded-lg hover:bg-gray-600 transition duration-300"
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
