import React,{useState} from "react"

export const ActivityTypeContext = React.createContext()

export const ActivityTypeProvider = (props) => {
    const[ActivityTypes,setActivityType] = useState()

 const getActivityType = () =>{
 return fetch("http://localhost:8088/activityTypes")
 .then(res => res.json())
 .then(setActivityType)
 }

 const addActivityType = (activityTypes) =>{
     return fetch("http://localhost:8088/activityTypes",{
         method:"POST",
         headers:{
            "Content-Type": "application/json"
         },
         body: JSON.stringify(activityTypes)
     })
     .then(getActivityType)
 }

 return(
     <ActivityTypeContext.provider value = {
         {
            ActivityTypes, getActivityType,addActivityType 
         }}>
             {props.children}
     </ActivityTypeContext.provider>
 )
}