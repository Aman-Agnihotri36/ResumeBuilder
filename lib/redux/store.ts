
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage/session'; // ✅ Clears on tab close

import PersonalSlice from './personalInfo';
import ExperienceSlice from './experience';
import EducationSlice from './education';
import SkillSlice from './skills';
import changeSlice from './state';
import SummerySlice from './summery';
import TempletSlice from './templet';

// Redux Persist Configuration
const persistConfig = {
    key: 'root',
    version: 1,
    storage, // ✅ Uses sessionStorage instead of localStorage
};

// Combine reducers
const rootReducer = combineReducers({
    personalInfo: PersonalSlice.reducer,
    experience: ExperienceSlice.reducer,
    education: EducationSlice.reducer,
    skill: SkillSlice.reducer,
    change: changeSlice.reducer,
    summery: SummerySlice.reducer,
    templet: TempletSlice.reducer
});

// Persist the reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// ✅ Export store (Fix: Remove makeStore function)
export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

// ✅ Export persistor
export const persistor = persistStore(store);

// Infer store-related types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
