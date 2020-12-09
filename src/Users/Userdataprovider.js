import React,{useState } from "react"
import "./User.css"
export const userContext = React.createContext()

export const Userprovider = (props) =>{
    const [user,setUser] = useState ([])


const getUsers = () =>{
    return fetch("http://localhost:8088/user")
    .then(res => res.json())
    .then(setUser)
}

const addUsers = parents =>{
    return fetch("http://localhost:8088/user",{
    method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(parents)
        })
            .then(getUsers)
    }

    return(
        <userContext.provider value={
            {
                user, addUsers,getUsers
            }} >
                {props.children}
            </userContext.provider> 
            )
}