import React,{useState} from "react"
export const ActivityTypeContext = React.createContext()

export const ActivityTypeProvider = (props) => {
    const[activityTypes,setactivityTypes] = useState([])

 const getActivityType = () =>{
 return fetch("http://localhost:8088/activityTypes")
 .then(res => res.json())
 .then(setactivityTypes)
 }

 const addActivityType = activityType =>{
     return fetch("http://localhost:8088/activityTypes",{
         method:"POST",
         headers:{
            "Content-Type": "application/json"
         },
         body: JSON.stringify(activityType)
     })
     .then(getActivityType)
 }

 return(
 
     <ActivityTypeContext.Provider value ={
         {
            activityTypes, getActivityType,addActivityType 
         }}>
             {props.children}
     </ActivityTypeContext.Provider>
     
 )
}