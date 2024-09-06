import { configureStore } from "@reduxjs/toolkit";
import api from "#api/api";

const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer
    },
    middleware: gdm => gdm().concat(api.middleware)
});

export default store;
