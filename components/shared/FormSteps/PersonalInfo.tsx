'use client'
import { Input } from "@/components/ui/input";

import { useAppDispatch, useAppSelector } from '@/lib/hooks'
import { PersonalActions } from "@/lib/redux/personalInfo";

export function PersonalInfo({ NextStep }: { NextStep: () => void }) {


    const dispatch = useAppDispatch()
    const { firstName, lastName, title, email, phone, location } = useAppSelector((state) => state.personalInfo)

    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    function handleChange(e: any) {
        const value = e.target.value
        dispatch(PersonalActions.updateInfo({ field: e.target.name, info: value }))
    }



    return (
        <div className="space-y-4 h-full w-[100%]">
            <h2 className="text-xl font-semibold text-gray-800">Personal Information</h2>
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">First Name</label>
                    <Input
                        required
                        type="text"
                        name="firstName"
                        value={firstName}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Last Name</label>
                    <Input
                        type="text"
                        name="lastName"
                        value={lastName}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                </div>
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700">Professional Title</label>
                <Input
                    type="text"
                    name="title"
                    value={title}
                    onChange={handleChange}
                    className="mt-1 block w-ful border rounded-md  shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <Input
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700">Phone</label>
                <Input
                    type="tel"
                    name="phone"
                    value={phone}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700">Location</label>
                <Input
                    type="text"
                    name="location"
                    value={location}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
            </div>

            <div className="flex justify-end mt-4">
                <button
                    // disabled={!isFormFilled}
                    type="button"

                    onClick={NextStep}
                    className="px-4 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-600"
                >
                    Next
                </button>
            </div>

        </div>
    );
}
