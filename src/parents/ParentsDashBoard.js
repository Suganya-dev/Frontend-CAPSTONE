import React,{useEffect,useContext, useState} from "react"
import {userContext} from "./ParentsDataprovider"
import { Link } from "react-router-dom"


export const ParentsDashboard =(props) =>{
    const{users, getUsers} = useContext(userContext);
    const[parent,setParent] = useState()
    const[kids,setkids]=useState([])

 useEffect(() =>{
    getUsers()
 },[])

 useEffect(() =>{
     const foundParent =users.find(p => p.id === parseInt(localStorage.getItem("kidschorepad_user")))
     const foundKids =users.filter(k => k.parentId === parseInt(localStorage.getItem("kidschorepad_user")))
     console.log(foundKids)
     setParent(foundParent)
     setkids(foundKids)
 },[users])


  return(
        <>
        {parent? parent.name : "no-parent"}
        <button onClick={() => props.history.push("/kids/create")}>
             Add New Child
            </button>
        {
        kids.map(kid=>{
            return (
            <div> 
            <h3>{kid.name}</h3>
         
            <button onClick={() => props.history.push("/users/create")}>
             Add Activity
            </button>
            </div>
        )})
    }
        </>
    )} 