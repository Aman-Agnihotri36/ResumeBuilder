import { createSlice } from '@reduxjs/toolkit'


type Prop = {
    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    temp: any,
    size: boolean
}

const initialState: Prop = {
    temp: '',
    size: false
};

const TempletSlice = createSlice({
    name: 'templet',
    initialState,
    reducers: {
        setTemplet: (state, action) => {
            state.temp = action.payload
        },

        setSize: (state) => {
            state.size = !state.size
        },
        removeSize: (state) => {
            state.size = false
        }


    }
})

export const TempletActions = TempletSlice.actions
export default TempletSlice