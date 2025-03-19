'use client'

import TextMobileStepper from "../Stepper"

import { PersonalInfo } from "./PersonalInfo"
import { Experience } from "./Experience"
import { Education } from "./Education"
import { Skills } from "./Skill"
import { Summary } from "./Summery"
import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import { changeActions } from "@/lib/redux/state"


function ConnectForm() {
    const { change } = useAppSelector((state) => state.change)
    // const [step, setStep] = useState(change)

    const dispatch = useAppDispatch()

    const NextStep = () => {
        // setStep((prev) => prev + 1)
        dispatch(changeActions.setState())
    }
    const PrevStep = () => {
        // setStep((prev) => prev - 1)
        dispatch(changeActions.removeState())
    }
    return (

        <div className="w-[50%] px-7 py-6  flex flex-col overflow-y-scroll max-h-[100%] shadow-lg mt-16 rounded-xl">
            <div >
                <TextMobileStepper />
                <form className="w-[100%]">
                    {change == 0 && <PersonalInfo NextStep={NextStep} />}
                    {change == 1 && <Experience NextStep={NextStep} PrevStep={PrevStep} />}
                    {change == 2 && <Education NextStep={NextStep} PrevStep={PrevStep} />}
                    {change == 3 && <Skills NextStep={NextStep} PrevStep={PrevStep} />}
                    {change == 4 && <Summary PrevStep={PrevStep} />}
                </form>
            </div>
        </div>
    )
}

export default ConnectForm
