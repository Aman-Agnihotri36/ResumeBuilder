import { createSlice } from '@reduxjs/toolkit'


type Prop = {
    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    Skill: any,
    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    remove: any
}

const initialState: Prop = {
    Skill: [],
    remove: null
};

const SkillSlice = createSlice({
    name: 'skill',
    initialState,
    reducers: {
        setSkill: (state, action) => {
            const { talent } = action.payload;
            state.Skill.push(talent)
        },

        setRemove: (state, action) => {
            const { index } = action.payload
            console.log('YOUR INDEX', index)
            state.remove = index
            // eslint-disable-next-line  @typescript-eslint/no-explicit-any
            state.Skill = state.Skill.filter((one: any, i: any) => i != state.remove)
        }


    }
})

export const SkillActions = SkillSlice.actions
export default SkillSlice