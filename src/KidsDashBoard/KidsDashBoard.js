import React,{useContext, useEffect,useState} from "react"
import {userContext} from "../parents/ParentsDataprovider"
import { Link } from "react-router-dom"
import "./Kids.css"

export const KidsDashBoard = (props) =>{
    const{users, getUsers} = useContext(userContext)
    const[kids,setkids] = useState([])
    const[parent,setParent] = useState([])

    useEffect(() =>{
        getUsers()
     },[]) 
    

    useEffect(() =>{
        const foundKids = users.filter(k => k.parentId ===parseInt(localStorage.getItem("kidschorepad_user")))
        setkids(foundKids)
    },[users])

    return(
        <>
        <h2>Welcome to KidsChorePad </h2>
        {
         kids.map(K => {
        return <Link key={K.id} to={`/users/${K.id}`}>
             <h3>{K.name}</h3>
        </Link>
        })
}
</>
  )}

