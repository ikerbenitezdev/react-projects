import { confuigureStore } from '@reduxjs/toolkit';

export const store = confuigureStore({
    reducer: {
        users: usersReducer
    }
});
