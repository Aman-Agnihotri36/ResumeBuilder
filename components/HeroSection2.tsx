import React from 'react'
import { Button } from './ui/button'

function HeroSection2() {
    return (
        <div className='flex flex-col items-center mt-8 '>

            <h1 className="text-2xl font-bold tracking-wide sm:text-4xl md:text-3xl  lg:text-5xl/none text-purple-700">
                Resume Templates Gallary
            </h1>

            <p className="mx-auto mt-5 max-w-[700px]  text-gray-400 md:text-[17px]"><span className='ml-[35px]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur,</span> <br /> debitis voluptatum. Nobis laboriosam est adipisci quia quod tenetur ab inventore.</p>

            <div className='flex max-w-2xl mx-auto gap-9 mt-5'>
                <Button className='rounded-2xl px-7 text-[15px]' variant='outline'>Modern</Button>
                <Button className='rounded-2xl px-7 text-[15px]' variant='outline'>Simple</Button>
                <Button className='rounded-2xl px-7 text-[15px]' variant='outline'>Creative</Button>
                <Button className='rounded-2xl px-7 text-[15px]' variant='outline'>All Templets</Button>
            </div>

        </div>
    )
}

export default HeroSection2
