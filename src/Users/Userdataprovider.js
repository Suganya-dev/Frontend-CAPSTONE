import React,{usestate} from "react"
import "./User.css"
export const UserContext = React.createContext()

export const Userprovider = (props) =>{
    const[users,serUsers] = usestate([])


const getUsers = () =>{
    return fetch ("http://localhost:8088/user")
    .then(res => res.json())
    .then(serUsers)
}

const addUsers = (parents) =>{
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
        <UserContext.provider value = {
            {
                users, addUsers,getUsers
            }} >
                {props.children}
            </UserContext.provider> )
}