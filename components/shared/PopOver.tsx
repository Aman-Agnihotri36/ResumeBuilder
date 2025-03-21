'use client'

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Plus } from 'lucide-react';
import { Input } from '../ui/input';
import { useAppDispatch } from '@/lib/hooks';
import { TempletActions } from '@/lib/redux/templet';


export default function FormDialog() {

    const dispatch = useAppDispatch()
    const router = useRouter()
    const handleSubmit = (e: any) => {
        e.preventDefault(); // Prevent default form submission

        router.push("/createresume");
    };

    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    const handleChange = (e: any) => {
        dispatch(TempletActions.setResumeTitle(e.target.value))
    }

    return (
        <div >
            <Dialog>
                <DialogTrigger asChild>
                    <Button className=" bg-white py-6 px-6 font-stretch-semi-condensed rounded-md  text-[1.1rem] text-purple-700 hover:bg-zinc-200">
                        {" "}
                        <Plus /> Create Resume
                    </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Enter Your Title</DialogTitle>
                        <DialogDescription>
                            Write Your Professional Title.
                        </DialogDescription>
                    </DialogHeader>
                    <form >
                        <Input required onChange={handleChange} />
                        <DialogFooter>
                            <Button onSubmit={handleSubmit} className='bg-purple-700 mt-3' type="submit">Create</Button>
                        </DialogFooter>
                    </form>

                </DialogContent>

            </Dialog>
        </div>
    );
}
