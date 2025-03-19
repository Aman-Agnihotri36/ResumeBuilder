import { createSlice } from '@reduxjs/toolkit'



type Prop = {
    change: number,
    experience: number,
    education: number
}

const initialState: Prop = {
    change: 0,
    experience: 0,
    education: 0
};

const changeSlice = createSlice({
    name: 'change',
    initialState,
    reducers: {
        setState: (state) => {

            state.change = state.change + 1
        },
        removeState: (state) => {
            if (state.change !== 0) {
                state.change = state.change - 1
            }
        },
        setExperience: (state) => {

            state.experience = state.change + 1
        },
        removeExperience: (state) => {
            if (state.experience !== 0) {
                state.experience = state.change - 1
            }
        },
        setEducation: (state) => {

            state.education = state.change + 1
        },
        removeEducation: (state) => {
            if (state.education !== 0) {
                state.education = state.change - 1
            }
        },


    }
})

export const changeActions = changeSlice.actions
export default changeSlice