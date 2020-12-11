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
    

   <article className="activityList"> 
  
   </article>
   </>
)}