import { createSlice, PayloadAction } from '@reduxjs/toolkit'




type Prop = {
    firstName: string,
    lastName: string,
    title: string,
    email: string,
    phone: string,
    location: string
}

const initialState: Prop = {
    firstName: 'John',
    lastName: 'Doe',
    title: 'Web Developer',
    email: 'abc@gmail.com',
    phone: '8973479988',
    location: 'New York'
};


const PersonalSlice = createSlice({
    name: 'personalInfo',
    initialState,
    reducers: {
        // eslint-disable-next-line  @typescript-eslint/no-explicit-any
        updateInfo: (state, action: PayloadAction<{ field: keyof Prop; info: any }>) => {
            const { field, info } = action.payload
            state[field] = info
        }


    }
})

export const PersonalActions = PersonalSlice.actions
export default PersonalSlice