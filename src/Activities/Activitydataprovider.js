import React, { useState } from "react"
import "./Activity.css"
export const ActivityContext = React.createContext()

export const ActivityProvider =(props) =>{
    const[activities,setActivities] = useState([])


const getActivity = () =>{
    return fetch ("http://localhost:8088/activities")
    .then(res => res.json())
    .then(setActivities)
}

const addActivity = (activities) =>{
    return fetch("http://localhost:8088/activities", {
        method:"POST",
        headers : {
            "Content-Type": "application/json" 
        },
        body: JSON.stringify(activities)
    })
    .then(getActivity)
}

const releaseActivity = activityId =>{
    return fetch(`http://localhost:8088/activities/${activityId}`,{
        method: "DELETE"
    })
    .then(getActivity)
}

const updateActivity = activities =>{
    return fetch(`http://localhost:8088/activities/`,{
        method:"PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(activities)
    })
    .then(getActivity)
}

return(
    <ActivityContext.Provider value = {{
        activities,getActivity,addActivity,releaseActivity,updateActivity
    }}>
        {props.children}
    </ActivityContext.Provider>
)}