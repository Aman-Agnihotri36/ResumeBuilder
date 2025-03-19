'use client'

// import { makeStore } from "@/lib/redux/store";
// import { Provider } from "react-redux";
// import { persistStore } from "redux-persist";
// import { PersistGate } from 'redux-persist/integration/react'

// interface ReduxProviderProps {
//     children: React.ReactNode;
// }
// const store = makeStore();
// const persistor = persistStore(store)


// export const ReduxProvider = ({ children }: ReduxProviderProps) => {
//     return <Provider store={store}>
//         <PersistGate loading={null} persistor={persistor}>
//             {children}
//         </PersistGate>
//     </Provider>;
// };

// export default ReduxProvider;


"use client";
import { Provider } from "react-redux";
import { store, persistor } from "@/lib/redux/store"; // ✅ Use store, not makeStore
import { PersistGate } from "redux-persist/integration/react";

interface ReduxProviderProps {
    children: React.ReactNode;
}

export const ReduxProvider = ({ children }: ReduxProviderProps) => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                {children}
            </PersistGate>
        </Provider>
    );
};
