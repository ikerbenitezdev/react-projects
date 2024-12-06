
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type UserId = string;

export interface User {
    name: string;
    github: string;
    email: string;
}

export interface UserWithId extends User {
    id: UserId;
}
const initialState : UserWithId[] = [
    {
        id: '1',
        name: 'Ahmed',
        github: 'ahmed',
        email: 'ahmed@gmail.com'
    },
    {
        id: '2',
        name: 'Ali',
        github: 'ali',
        email: 'ali@gmail.com'
    },
    {
        id: '3',
        name: 'Omar',
        github: 'omar',
        email: 'omar@gmail.com'
    },
    {
        id: '4',
        name: 'Sara',
        github: 'sara',
        email: 'sara@gmail.com'
    },
    {
        id: '5',
        name: 'Sama',
        github: 'sama',
        email: 'sama@gmail.com'
    }
];

    

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        deleteUserById: (state, action: PayloadAction<UserId>) => { 
            const id = action.payload;
            return state.filter(user => user.id !== id);
        }
    }
});

export default usersSlice.reducer

export const { deleteUserById } = usersSlice.actions;   
