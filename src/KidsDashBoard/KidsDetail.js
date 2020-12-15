import React, { useState, useEffect, useContext } from "react"
import {ActivityContext} from "../Activities/Activitydataprovider"
import {userContext} from "../parents/ParentsDataprovider"
import { Link } from "react-router-dom"
import "../Activities/Activity.css"
import "./Kids.css"

// importing datas using usecontext
export const KidsDetail =(props) => {
    const{activities,getActivity} = useContext(ActivityContext)
    const{users, getUsers} = useContext(userContext)

    const[Activity,setActivity] = useState([])
    const[kidusers,setKidusers] = useState({})

//  getting all users,activities data by iterating it
    useEffect(() => {
        getActivity()
        .then(getUsers)
    },[])
//    console.log(kidusers)
    // filtering the activities which matches to kids id.
    console.log(props)
    useEffect(() => {
    const findActivity = activities.filter(a => a.userId === parseInt(props.match.params.userId))
    setActivity(findActivity)
    },[activities])

//   Finding the users related to the activities
    useEffect(() => {
    const findKids = users.find(k => k.id === parseInt(props.match.params.userId)) || {}
    setKidusers(findKids)
    console.log(findKids)
    },[users])

console.log(Activity.name)
// console.log(users)
// used mapping when the kids have more than one activity.
  return(
      <>
        {/* <section className="users"/> */}
    <h2 className="kiduser__name">Name:{kidusers.name}</h2>
       {
            Activity.map(a =>   
             <section className = "activity">
             <h3 className="activity__name">Activity Name: {a.name}</h3>
               <h3 className="activity__date">Date: {a.date}</h3>
               <h3 className="activity__type">Activity Type: {a.activityTypeId}</h3>
                <h3 className="activity__time">Time limit: {a.timeLimit}</h3>
                <h3 className="activity__rewards">Reward points: {a.rewardPoints}</h3>
               

   <button onClick={() => {
    props.history.push("/users")}}
    > Completed Activity </button>
    </section>)
}
   {/* {
       Activity.map(act =>{
           return key={act.id} to={`/users/${act.id}`}>
             <h3> {act.name} </h3>
            
       })
   } */}
   </>
  )}

