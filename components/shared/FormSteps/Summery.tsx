'use client'


// import { Download } from "./download";
import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import { SummeryActions } from "@/lib/redux/summery";
import { TempletActions } from "@/lib/redux/templet";
import { useRouter } from "next/navigation";

export const Summary = ({ PrevStep }: { PrevStep: () => void }) => {
    const router = useRouter()

    const { data } = useAppSelector(store => store.summery)

    const dispatch = useAppDispatch()

    const HandleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        dispatch(SummeryActions.setSummery(e.target.value))
    }

    const handleClick = () => {
        setTimeout(() => {
            dispatch(TempletActions.setSize())
        }, 50)
        router.push('/preview')
    }



    return (
        <div className="w-[100%]">
            <h2 className="text-2xl font-bold mb-4 text-center">Summary</h2>
            <div className="mb-4">
                <label className="block text-gray-700 mb-2">Write Your Summary</label>
                <textarea
                    name="summary"
                    value={data}
                    onChange={HandleChange}
                    // rows="4"
                    className="w-full border rounded-lg px-3 py-2"
                ></textarea>
            </div>
            <button
                type="button"
                // onClick={generateSummary}
                className="w-full bg-purple-500 text-white py-3 rounded-lg hover:bg-purple-600 transition duration-300 mb-4"

            >
                {/* {loading ? "Generating Summary..." : "Generate Summary"} */}
                Generate Summary
            </button>
            <div className="flex justify-between mt-4">

                <button
                    type="button"
                    onClick={PrevStep}
                    className="bg-gray-500 text-white py-3 px-6 rounded-lg hover:bg-gray-600 transition duration-300"
                >
                    Back
                </button>
                <button type="button" onClick={handleClick} className=" p-2 px-6 rounded-md text-[1.1rem] bg-purple-500 text-white ">
                    Preview

                </button>
                {/* <Download /> */}
            </div>
        </div>
    );
};
