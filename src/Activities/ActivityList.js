import React, { useContext, useEffect } from "react"
import {activityContext} from"./Activitydataprovider"
import "./Activity.css"

export const ActivityList = (props) =>{
    const{activities,getActivity} = useContext(activityContext)

useEffect(() =>{
    getActivity()
},[])


return(
    <>
    <h1>Activities</h1>
    <button onClick={() => props.history.push("/activities/create")}>
    Add Activity
   </button>

   <article className="activityList"> 
   {
       activities.map(act =>{
           return(
            <h3>{act.name}</h3>
           )
       })
   }
   </article>
   </>
)}