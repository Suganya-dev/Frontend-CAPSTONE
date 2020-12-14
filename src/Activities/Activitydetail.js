import React, { useState, useEffect, useContext } from "react"
import {ActivityContext} from "./Activitydataprovider"
import "./Activity.css"

// importing datas using usecontext
export const ActivityDetail = (props) =>{
    const{activities,getActivity,releaseActivity} = useContext(ActivityContext)

// using statevariable for state change
// whenever URL(state) changes useState helps to start render and gets data

    const[Activity,setActivity] = useState({})

    useEffect(() => {
        getActivity()
    },[])

    useEffect(() => {
        // console.log(activities)
    const findActivity = activities.find(a => a.id === parseInt(props.match.params.activityId))|| {}
    // console.log(findActivity)
    setActivity(findActivity)
    },[activities])
console.log(activities)

    return(
        <> 
        <section className="activity">
            <h3 className="activity__name">Name: {Activity.name}</h3>
            <h3 className="activity__date">Date: {Activity.date}</h3>
            <h3 className="activity__completed">IsCompleted: {Activity.isCompleted ? "true" : "false"}</h3>
            <h3 className="Activity__type">Activity Type: {Activity.activityTypeId}</h3>
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