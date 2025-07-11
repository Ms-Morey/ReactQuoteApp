import axios from 'axios'
import React, { createContext, useContext, useEffect, useState } from 'react'
let helper = createContext()

const AppContext = ({ children }) => {
    let [api, setApi] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3000/quotes').then((res) => {
            setApi(res.data)
        })
    }, [])
    return (
        <helper.Provider value={{ api, setApi }}>{children}</helper.Provider>
    )
}
export let useData = ()=>useContext(helper)

export default AppContext