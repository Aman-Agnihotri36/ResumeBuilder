import { createSlice } from '@reduxjs/toolkit'


type Prop = {
    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    data: any
}

const initialState: Prop = {
    data: ''
};

const SummerySlice = createSlice({
    name: 'summery',
    initialState,
    reducers: {
        setSummery: (state, action) => {
            state.data = action.payload
        },




    }
})

export const SummeryActions = SummerySlice.actions
export default SummerySlice