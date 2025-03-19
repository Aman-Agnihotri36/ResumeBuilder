



import { SingleTemplet } from './SingleTemplet'
import { AllTemp } from '@/types/data'
function CombineTemplet() {

    return (
        <div className='flex mt-12 max-w-6xl justify-center flex-wrap mx-auto gap-24'>
            {AllTemp?.map((temp, index) => (
                <div key={index}>
                    < SingleTemplet Temp={temp} />
                </div>
            ))}
        </div>
    )
}

export default CombineTemplet
