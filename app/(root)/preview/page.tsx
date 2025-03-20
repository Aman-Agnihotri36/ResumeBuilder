'use client'

import { useRef } from "react";
import { useReactToPrint } from "react-to-print";


import { useAppDispatch, useAppSelector } from "@/lib/hooks"
import Templet1 from "@/components/templets/Templet1"
import Templet2 from "@/components/templets/Templet2"
import Templet4 from "@/components/templets/Templet4"
import Templet5 from "@/components/templets/Templet5"
import { ResumePreview } from "@/components/shared/PreviewTamplet"

import Templet6 from "@/components/templets/Templet6"
import Templet7 from "@/components/templets/Templet7"
import Templet8 from "@/components/templets/Templet8"
import Templet9 from "@/components/templets/Templet9"




export default function PreviewFirst() {
    const { temp } = useAppSelector(state => state.templet)


    const contentRef = useRef<HTMLDivElement>(null);
    const reactToPrintFn = useReactToPrint({ contentRef });



    const AllTemp = [
        {
            name: 'Templet1',
            templet: <Templet1 />
        },
        {
            name: 'Templet2',
            templet: <Templet2 />
        },
        {
            name: 'Templet3',
            templet: <Templet4 />
        },
        {
            name: 'Templet4',
            templet: <Templet4 />
        },
        {
            name: 'Templet5',
            templet: <Templet5 />
        },
        {
            name: 'Templet6',
            templet: <Templet6 />
        },
        {
            name: 'Templet7',
            templet: <Templet7 />
        },
        {
            name: 'Templet8',
            templet: <Templet8 />
        },
        {
            name: 'Templet9',
            templet: <Templet9 />
        }
    ]


    const data = AllTemp.filter(one => one.name == temp)
    return (
        <div >
            <div id="no-print">

                <div className="">
                    <div className="flex flex-col items-center pt-6">
                        <p className="font-bold text-2xl">Congrats! Your Ultimate AI generates Resume is ready!</p>
                        <p className="text-gray-500">Now you are ready to download your resume and you can share unique resume with your friends and family</p>
                    </div>
                    <div className="flex mt-6 justify-around">
                        <button onClick={() => reactToPrintFn()} className="bg-purple-600 text-white p-2 rounded-md">Download</button>


                    </div>


                </div>
            </div>
            <div ref={contentRef} className="flex justify-center  mt-6 print resume-container  ">
                {!temp ? <ResumePreview /> : data[0].templet}
            </div>
        </div>
    )
}