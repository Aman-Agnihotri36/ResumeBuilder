'use client'

import ConnectForm from '@/components/shared/FormSteps/ConnectForm'

import { ResumePreview } from '@/components/shared/PreviewTamplet'
import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import React, { useEffect } from 'react'

import Templet1 from '@/components/templets/Templet1'
import Templet2 from '@/components/templets/Templet2'
import Templet3 from '@/components/templets/Templet3'
import Templet4 from '@/components/templets/Templet4'
import Templet5 from '@/components/templets/Templet5'
import Templet6 from '@/components/templets/Templet6'
import Templet7 from '@/components/templets/Templet7'
import Templet8 from '@/components/templets/Templet8'
import Templet9 from '@/components/templets/Templet9'
import { TempletActions } from '@/lib/redux/templet'

function CreateResume() {

    const dispatch = useAppDispatch()

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
            templet: <Templet3 />
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

    useEffect(() => {
        dispatch(TempletActions.removeSize())
    }, [])

    const { resumeTitle } = useAppSelector((store) => store.templet)

    const { temp } = useAppSelector((store) => store.templet)
    console.log('MY TEMPA', temp)

    const currentResume = AllTemp.filter((one) => one.name == temp)
    // console.log('YOUR CURRENT RESUME', currentResume)

    // const data = currentResume[0].name
    return (
        <div >
            <p>{resumeTitle}</p>
            {/* <button className=" p-2 px-6 rounded-md text-[1.1rem] bg-purple-500 text-white ">
                Save &#8594;

            </button> */}
            {/* <h1 className="text-4xl font-semibold text-purple-700 mt-4 tracking-wide">
                FullStack Developer
            </h1> */}



            <div className='flex gap-5 w-full pt-8 justify-around'>
                <ConnectForm />

                {!currentResume[0]?.templet ? <ResumePreview /> : currentResume[0].templet}



            </div>
        </div>
    )
}

export default CreateResume
