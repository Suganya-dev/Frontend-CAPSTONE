import React,{ useContext, useEffect,useState } from "react"
import "./Parent.css"
import {ActivityContext} from"../Activities/Activitydataprovider"
import {userContext} from "./ParentsDataprovider"
import {ActivityCard} from "../Activities/Activity.js"
import Button from 'react-bootstrap/Button'
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
       const foundactivity = activities.filter(A => A.userId === props.kiduser.id) 
       setkidActivities(foundactivity)},[activities])
    
  
    return (
        <>
    <section className="users">
    <h3 className="kiduser__name">Child Name:{props.kiduser.name}</h3>

    <section className="button1">
    <Button  variant="primary" size="sm" onClick={() => props.history.push(`/activities/create/${props.kiduser.id}`)}>
    Add Activity
   </Button> 
   </section>

   {/* for makking hyperlink,using Link */}
  
  {
    kidActivities.map(act => {
        return <Link key={act.id} to={`/activities/${act.id}`}>
             <h3>{act.name}</h3>
        </Link>
        })
}
<section className="button1">
<Button variant="primary" size="sm"  className="btn--release"
        onClick={() => {
            // Code to delete animal from database
            releaseChild(props.kiduser.id)
            .then(() =>{
                props.history.push("/")
            })
        }}
        >Remove Child</Button>
        </section>
</section>
</>
    )}


