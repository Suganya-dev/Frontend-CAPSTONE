import React, { useContext, useEffect } from "react"
import {ActivityContext} from"./Activitydataprovider"
import "./Activity.css"

export const ActivityList = (props) =>{
    const{activities,getActivity} = useContext(ActivityContext)

useEffect(() =>{
    getActivity()
},[])


return(
    <>
    <h1>Activities</h1>
    <article className="activityList"> 
  
   </article>
   </>
)}


// export const Kidcard = (props) =>{
    
//     {console.log(props)}
//     return <section className="users">
//     <h3 className="kiduser__name">Name:{props.kiduser.name}</h3>

//     <button  onClick={() => props.history.push(`/activities/create/${props.kiduser.id}`)}>
//     Add Activity
//    </button>
  
// </section>
// }