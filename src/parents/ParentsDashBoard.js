import React,{useEffect,useContext, useState} from "react"
import {userContext} from "./ParentsDataprovider"

import {Kidcard} from "./Kidcard"


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
        return <Kidcard key={kid.id} kiduser={kid}{... props} />})
    }
</>
  )}

//   {
//     kidActivities.map(act => {
//         return (
//             <h3>{act.Name}
//             </h3>
//         )
//     })
// }