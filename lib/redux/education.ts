import { createSlice } from '@reduxjs/toolkit'



type Prop = {
    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    Education: any,
    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    EduForm: any,
    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    remove: any
}

const initialState: Prop = {
    Education: [],
    EduForm: [],
    remove: null
};

const EducationSlice = createSlice({
    name: 'education',
    initialState,
    reducers: {
        setEduForm: (state) => {
            state?.EduForm?.push(1)
        },
        removeEduForm: (state) => {
            state?.EduForm?.pop()
        },
        setEducation: (state, action) => {
            const { educations, value, name, index } = action.payload;


            if (!state.Education[0]) {

                state.Education = [...educations];
                state.Education[0][name] = value;
            } else {

                if (state.Education[index] == undefined) {

                    state.Education.push(educations[0]);
                }



                // Update the specific field of the experience at the given index
                state.Education[index] = {
                    ...state.Education[index],
                    [name]: value
                }
            }
        },

        setRemove: (state, action) => {
            const { index } = action.payload
            state.remove = index
            // eslint-disable-next-line  @typescript-eslint/no-explicit-any
            state.Education = state.Education.filter((one: any, i: any) => i != state.remove)
        }


    }
})

export const EducationActions = EducationSlice.actions
export default EducationSlice