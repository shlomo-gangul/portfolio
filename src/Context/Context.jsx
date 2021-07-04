import React, { useContext } from "react";

const DataContex = React.createContext({});

export const DataProvider = DataContex.Provider;
export const DataConsumer = DataContex.Consumer;

export default function useData(){
    return useContext(DataContex)
}