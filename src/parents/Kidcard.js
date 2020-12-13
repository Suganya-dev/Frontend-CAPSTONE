import React,{ useContext, useEffect,useState } from "react"
import "./Parent.css"
import {ActivityContext} from"../Activities/Activitydataprovider"
import {userContext} from "./ParentsDataprovider"
import {ActivityCard} from "../Activities/Activity.js"
import { Link } from "react-router-dom"

export const Kidcard = (props) =>{
    // console.log(props)
    const{releaseChild} = useContext(userContext)
    const{activities,getActivity} = useContext(ActivityContext)
        const[kidActivities,setkidActivities] =useState([])

    useEffect(() =>{
        getActivity()
    },[])

    useEffect(() =>{
       const foundactivity = activities.filter(A => A.kidsId === props.kiduser.id) 
       setkidActivities(foundactivity)},[activities])
    
  
    return (
        <>
    <section className="users">
    <h3 className="kiduser__name">Name:{props.kiduser.name}</h3>

    <button  onClick={() => props.history.push(`/activities/create/${props.kiduser.id}`)}>
    Add Activity
   </button> 
   
   {/* for makking hyperlink,using Link */}
  
  {
    kidActivities.map(act => {
        return <Link key={act.id} to={`/activities/${act.id}`}>
             <h3>{act.Name}</h3>
        </Link>
        })
}

<button className="btn--release"
        onClick={() => {
            // Code to delete animal from database
            releaseChild(props.kiduser.id)
            .then(() =>{
                props.history.push("/")
            })
        }}
        >Remove Child</button>
</section>
</>
    )}


