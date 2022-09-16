import React, { useEffect, useState } from "react";
import getData from "../services/getUserData";

export const Context = React.createContext({})

export default function ContextProvider({children}){

    const [data, setData] = useState([]);
    const [enteredData, setEnteredData] = useState('')

    useEffect(() => {
        getData().then(setData)
    },[])

    function handleChange(e) {
        setEnteredData(e.target.value);
        };
    
    function handleClick(e) {
        e.preventDefault()
        setEnteredData(e.target.value)
        getData(enteredData).then(setData)
    };

    function handleSubmit(e) {
        e.preventDefault();
    } 

    return (
        <Context.Provider value={{data, enteredData, setData, setEnteredData, handleChange, handleClick, handleSubmit}}>
            {children}
        </Context.Provider>
    )
}

