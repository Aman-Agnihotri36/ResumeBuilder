'use client'

import React from 'react';

import { useRouter } from 'next/navigation';

import { useAppDispatch } from '@/lib/hooks'
import { TempletActions } from '@/lib/redux/templet';


// eslint-disable-next-line  @typescript-eslint/no-explicit-any
export const SingleTemplet = ({ Temp }: { Temp: any }) => {

    const router = useRouter()
    const dispatch = useAppDispatch()


    const handleClick = (name: string) => {
        dispatch(TempletActions.setTemplet(name))
        router.push('/createresume')
    }


    return (

        <div className="relative  rounded-2xl overflow-hidden bg-white shadow-lg transition-all duration-300 group hover:shadow-xl hover:scale-105">
            <img
                src={Temp.image}
                alt="Creative Design"
                className="w-[300px] h-[380px] object-fill transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute top-4 left-4 flex gap-2">
                <span className="px-3 py-1 rounded-full text-sm font-medium bg-purple-400 text-purple-900">Featured</span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform">

                <h3 className="text-white text-xl font-semibold mb-3">Creative Design</h3>
                <button onClick={() => handleClick(Temp.name)} className="w-full px-4 py-2 bg-white text-gray-900 rounded-lg font-medium hover:bg-gray-100 transition-colors">Use Template</button>
            </div>
        </div>

    );
};