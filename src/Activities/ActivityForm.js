import React, { useContext, useRef, useEffect } from "react"
import { ActivityContext } from "./Activitydataprovider"
import {ActivityTypeContext} from "../ActivityType/ActivityTypeProvider"
import {RewardTypeContext} from "../ActivityType/RewardTypeProvider"
import "./Activity.css"
import Button from 'react-bootstrap/Button'

//   // Use the required context providers for data
export const Activityform = (props) =>{

    const{addActivity,getActivity} = useContext(ActivityContext)
    const{activityTypes,getActivityType} = useContext(ActivityTypeContext)
    const{rewardTypes,getRewardPoints}=useContext(RewardTypeContext)

    const Name = useRef(null)
    const Type = useRef(null)
    const Time = useRef(null)
    const Rewards = useRef(null)
    const Date = useRef(null)

    useEffect(() =>{
        getActivity()
        .then(getActivityType)
        .then(getRewardPoints)
    },[])

    const ConstructNewActivity = () =>{
        const ActivityName = Name.current.value
        const ActivityType = parseInt(Type.current.value)
        const TimeLimit = Time.current.value
        const RewardPoints = parseInt(Rewards.current.value)
        const Activitydate = Date.current.value
       const kidsId = parseInt(props.match.params.kidsId)
    
        if(ActivityName === "" || ActivityType === "" || TimeLimit ==="" ||
        RewardPoints === ""){
            window.alert("please select a Name,Type,Time Limit and Rewards Points")
        }else{
            addActivity({
                name : ActivityName,
                activityTypeId : ActivityType,
                timeLimit : TimeLimit,
                rewardTypeId:RewardPoints,
                userId:kidsId,
                isCompleted:false,
                date:Activitydate
            })
            .then(() => props.history.push("/"))
        }
        }
        return (
            <form className="ActivityForm">
                    <h2 className="ActivityForm__title">New Activity</h2>
                    <fieldset>
                        <div className="form-group">
                            <label htmlFor="activityName">Activity Name: </label>
                            <input type="text" id="activityName" ref={Name} required autoFocus className="form-control" placeholder="Activity name" />
                        </div>
                    </fieldset>

                    <fieldset>
                        <div className="form-group">
                            <label htmlFor="activityName">Activity Date: </label>
                            <input type="date" id="activityDate" ref={Date} className="form-control" placeholder="Activity Date" />
                        </div>
                    </fieldset>

                    <fieldset>
                        <div className="form-group">
                        <label htmlFor="type">Activity Type: </label>
                        <select defaultValue="" name="type" ref={Type} id="activityType" className="form-control" >

                        <option value="0">Select Activity Type</option>
                       {activityTypes.map(a=> (
                           <option key={a.id} value={a.id}>
                               {a.name}
                           </option>
                       ))}
                        </select>
                        </div>
                        </fieldset>
        
                        <fieldset>
                        <div className="form-group">
                        <label htmlFor="time">Time Limit: </label>
                        <select defaultValue="" name="time" ref={Time} id="activityTime" className="form-control" >
                        <option value="0">Select Time Limit</option>
                        <option value="1">15 mins</option>
                        <option value="2">30 mins</option>
                        <option value="3">45 mins</option>
                        <option value="4">60 mins(1 hr)</option>
                        <option value="5"> 90 mins</option>
                        <option value="6"> 120 mins(2 hr)</option>
                        </select>
                        </div>
                        </fieldset>
                        
                <fieldset>
                <div className="form-group">
                <label htmlFor="rewards">RewardPoints: </label>
                <select defaultValue="" name="rewards" ref={Rewards} id="activitypoints" className="form-control">

                <option value="0">Reward Points</option>
                {rewardTypes.map(r =>(
                    <option key={r.id} value={r.id}>
                        {r.points}
                    </option>
                ))}
                </select>
                </div>
                </fieldset>

                <section className="button">
                <Button variant="primary" className="button" type="submit"
                onClick={evt => {
                    evt.preventDefault() // Prevent browser from submitting the form
                    ConstructNewActivity()
                }}
                className="btn btn-primary">
                Save Activity
            </Button>
            </section>
                </form>
)
}