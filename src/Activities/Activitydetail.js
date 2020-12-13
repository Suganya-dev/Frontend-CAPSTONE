import React, { useState, useEffect, useContext } from "react"
import {ActivityContext} from "./Activitydataprovider"
import "./Activity.css"

// importing datas using usecontext
export const ActivityDetail = (props) =>{
    const{activities,getActivity} = useContext(ActivityContext)

// using statevariable for state change
// whenever URL(state) changes useState helps to start render and gets data

    const[activity,setActivity] = useState({})

    useEffect(() => {
        getActivity()
    },[])

    useEffect(() => {
    const findActivity = activities.find(a => a.id === props.match.params.activityId)|| {}
    setActivity(activity)
    },[activities])

    return(
        <section className="activity">
            <h3 className="activity__name">Name: {activities.Name}</h3>
            <h3 className="activities__type">Activity Type: {activities.Type}</h3>
            <h3 className="activities__time">Time limit: {activities.Time}</h3>
            <h3 className="activities__rewards">Reward points: {activities.Rewards}</h3>
        </section>
    )}