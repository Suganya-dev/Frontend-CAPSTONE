import React,{ useContext, useEffect,useState } from "react"
import "./Parent.css"
import {ActivityContext} from"../Activities/Activitydataprovider"

export const Kidcard = (props) =>{
    console.log(props)
    const{activities,getActivity} = useContext(ActivityContext)
        const[activity,setActivity] =useState([])

    useEffect(() =>{
        getActivity()
    },[])

    useEffect(() =>{
       const foundactivity = activities.find(A => A.id === (props.kiduser.id))
       setActivity(foundactivity)},[activities])
    
    // {console.log(props)}
    return (
        <>
    <section className="users">
    <h3 className="kiduser__name">Name:{props.kiduser.name}</h3>

    <button  onClick={() => props.history.push(`/activities/create/${props.kiduser.id}`)}>
    Add Activity
   </button>
  
  
  {
    activity.map(act => {
        return (
            <h3>{act.name}
            </h3>
        )
    })
}
</section>
</>
    )}

