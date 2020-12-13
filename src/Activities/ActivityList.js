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


