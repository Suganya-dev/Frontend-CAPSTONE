import React, { useState, useEffect, useContext } from "react"
import {ActivityContext} from "./Activitydataprovider"
import {ActivityTypeContext} from "../ActivityType/ActivityTypeProvider"
import {RewardTypeContext} from "../ActivityType/RewardTypeProvider"
import "./Activity.css"

// importing datas using usecontext
export const ActivityDetail = (props) =>{
    const{activities,getActivity,releaseActivity} = useContext(ActivityContext)
    const{activityTypes,getActivityType} = useContext(ActivityTypeContext)
    const{rewards,getRewardPoints} = useContext(RewardTypeContext)

// using statevariable for state change
// whenever URL(state) changes useState helps to start render and gets data

    const[Activity,setActivity] = useState({})
    const[ActivityType,setActivityType]=useState({})
    const[Rewards,setRewards]=useState({})

    useEffect(() => {
        getActivity()
        .then(getActivityType)
        .then(getRewardPoints)
    },[])
//  For finding the Activity name
    useEffect(() => {
                     // console.log(activities)
    const findActivity = activities.find(a => a.id === parseInt(props.match.params.activityId))|| {}
                 // console.log(findActivity)
    setActivity(findActivity)
    },[activities])
console.log(activities)

//  For finding the ActivityType name(not id) in the detail window
 useEffect(() => {
  const findActivityType = activityTypes.find(t => t.id === Activity.activityTypeId)
  setActivityType(findActivityType)
  console.log(findActivityType)
 },[activityTypes])

//  For getting the Rewards points(not id) in the detail window 
// useEffect(() =>{
//     const findRewards = rewards.find(r => r.id === Activity.rewardPoints)
//     setRewards(findRewards)
//     console.log(findRewards)
// },[rewards])
 
    return(
        <> 
        <section className="activity">
            <h3 className="activity__name">Name: {Activity.name}</h3>
            <h3 className="activity__date">Date: {Activity.date}</h3>
            <h3 className="activity__completed">IsCompleted: {Activity.isCompleted ? "true" : "false"}</h3>
            <h3 className="Activity__type">Activity Type: {ActivityType ? ActivityType.name : ""}</h3>
            <h3 className="Activity__time">Time limit: {Activity.timeLimit}</h3>
            <h3 className="Activity__rewards">Reward points: {Activity.rewardPoints}</h3>
        </section>
        
{/* code to delete the activity */}
        <button className="btn--release"
        onClick={() => {
            releaseActivity(props.match.params.activityId)
                .then(() => {
                    props.history.push("/")
                })
        }}
>Delete Activity</button>
{/* code to edit the activity */}

<button onClick={() => {
    props.history.push(`/activities/edit/${Activity.id}`)
    }}>Edit Activity</button>
</>
    )}