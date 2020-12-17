import React, { useState, useEffect, useContext } from "react"
import {ActivityContext} from "../Activities/Activitydataprovider"
import {userContext} from "../parents/ParentsDataprovider"
import {ActivityTypeContext} from "../ActivityType/ActivityTypeProvider"
import {RewardTypeContext} from "../ActivityType/RewardTypeProvider"
import {ActivityCard} from "../Activities/Activity"
import Button from 'react-bootstrap/Button'
import "../Activities/Activity.css"
import "./Kids.css"

// importing datas using usecontext
export const KidsDetail =(props) => {
    const{activities,getActivity} = useContext(ActivityContext)
    const{users, getUsers} = useContext(userContext)
    const{activityTypes,getActivityType} = useContext(ActivityTypeContext)
    const{rewardTypes,getRewardPoints} = useContext(RewardTypeContext)

    const[Activity,setActivity] = useState([])
    const[kidusers,setKidusers] = useState({})
    const[ActivityType,setActivityType]=useState({})
    const[RewardPoints,setRewardPoints]=useState({})

//  getting all users,activities data by iterating it
    useEffect(() => {
        getActivity()
        .then(getUsers)
        .then(getActivityType)
        .then (getRewardPoints)
    },[])
//    console.log(ActivityType)
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

return(
      <>
      <h2 className="kiduser__name">Name:{kidusers.name}</h2>
       {
           // Finding the activitytype name in the detail window form
             // Getting the reward points in the detail window form 
             // used mapping when the kids have more than one activity.
            Activity.map(a =>  {
                const findActivityType = activityTypes.find(t => t.id === a.activityTypeId) || {}
                const findRewards = rewardTypes.find(r => r.id === a.rewardTypeId) 
             return <section className = "activity">
             <h3 className="activity__name">Activity Name: {a.name}</h3>
            <h3 className="activity__date">Date: {a.date}</h3>
            <h3 className="activity__type">Activity Type: {findActivityType ? findActivityType.name: ""}</h3>
            <h3 className="activity__time">Time limit: {a.timeLimit}</h3>
            <h3 className="activity__rewards">Reward points: {findRewards ? findRewards.points : ""}</h3>
               

   <Button  variant="primary" onClick={() => {
    props.history.push(`/users/${kidusers.id}`)}}
    > Completed Activity </Button>
    </section>})
}
   {
       Activity.map(act =>{ 
           if (act.isCompleted){
               return(
        <ActivityCard key={act.id} Activity ={act} to={`/users/${act.id}`} />)}})

           }
         </>
  )}

