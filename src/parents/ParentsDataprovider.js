import React, { useState } from "react"
import "./Parent.css"
export const userContext = React.createContext()

export const Userprovider = (props) => {
    const [users, setUsers] = useState([])


    const getUsers = () => {
        return fetch("http://localhost:8088/users")
            .then(res => res.json())
            .then(setUsers)
    }

    const addUsers = parents => {
        return fetch("http://localhost:8088/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(parents)
        })
            .then(getUsers)
    }

    const releaseChild = kidsId=> {
        return fetch(`http://localhost:8088/users/${kidsId}`, {
            method: "DELETE"
        })
            .then(getUsers)
    }

    return (
        <userContext.Provider value={
            {
                users, addUsers, getUsers,releaseChild
            }} >
            {props.children}
        </userContext.Provider>
    )
}