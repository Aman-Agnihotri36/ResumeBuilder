import { createSlice } from '@reduxjs/toolkit'



type Prop = {
    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    Experience: any,
    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    ExpForm: any,
    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    remove: any
}

const initialState: Prop = {
    Experience: [],
    ExpForm: [],
    remove: null
};


const ExperienceSlice = createSlice({
    name: 'experience',
    initialState,
    reducers: {
        setExPForm: (state) => {
            state.ExpForm.push(1)
        },
        removeExPForm: (state) => {
            state.ExpForm.pop()
        },
        setExperience: (state, action) => {
            const { experiences, value, name, index } = action.payload;


            if (!state?.Experience[0]) {

                state.Experience = [...experiences];
                state.Experience[0][name] = value;
            } else {

                if (state.Experience[index] == undefined) {
                    console.log("Your EXP", experiences)
                    state.Experience.push(experiences[0]);
                }



                // Update the specific field of the experience at the given index
                state.Experience[index] = {
                    ...state.Experience[index],
                    [name]: value
                }
            }
        },
        setRemove: (state, action) => {
            const { index } = action.payload;

            // Ensure `index` is a number
            const removeIndex = Number(index);
            console.log('MY INDEX', removeIndex)

            // eslint-disable-next-line  @typescript-eslint/no-explicit-any
            state.Experience = state.Experience.filter((_: any, i: any) => i !== removeIndex);
        }


    }
})

export const ExperienceActions = ExperienceSlice.actions
export default ExperienceSlice