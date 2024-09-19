import React from "react";
import { AppRouter } from "./router";
import StoreContext from "./store";
import { UseCurrencies } from "./components/hooks/usecurrencies";

export const App = () => {


const {error, loading, currencies}=UseCurrencies();

    return (
        <StoreContext.Provider value={{currencies}}>
            <AppRouter />
        </StoreContext.Provider>
    );
};
