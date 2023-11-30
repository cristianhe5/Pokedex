import { createSlice } from "@reduxjs/toolkit";

const trainerNameSlice = createSlice({
    name: 'treinerName',
    initialState:'',
    reducers: {
        setTrainerName: (currentValue,action) => action.payload

    }
})

export const {setTrainerName} = trainerNameSlice.actions

export default trainerNameSlice.reducer

