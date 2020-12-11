import React, { useContext, useRef, useEffect } from "react"
import { ActivityContext } from "./Activitydataprovider"
import "./Activity.css"

export const Activityform = (props) =>{
    const{addActivity,getActivity} = useContext(ActivityContext)

    const Name = useRef(null)
    const Type = useRef(null)
    const Time = useRef(null)
    const Rewards = useRef(null)
  

    useEffect(() =>{
        getActivity()
    },[])

    const ConstructNewActivity = () =>{
        const ActivityName = Name.current.value
        const ActivityType = Type.current.value
        const TimeLimit = Time.current.value
        const RewardPoints = Rewards.current.value
       const kidsId = parseInt(props.match.params.kidsId)
    
        if(ActivityName === "" || ActivityType === "" || TimeLimit ==="" ||
        RewardPoints === ""){
            window.alert("please select a Name,Type,Time Limit and Rewards Points")
        }else{
            addActivity({
                Name : ActivityName,
                Type : ActivityType,
                Time : TimeLimit,
                Rewards:RewardPoints,
                kidsId:kidsId
            })
            .then(() => props.history.push("/"))
        }
        }
        return (
            <form className="ActivityForm">
                    <h2 className="ActivityForm__title">New Activity</h2>
                    <fieldset>
                        <div className="form-group">
                            <label htmlFor="employeeName">Activity Name: </label>
                            <input type="text" id="employeeName" ref={Name} required autoFocus className="form-control" placeholder="Activity name" />
                        </div>
                    </fieldset>
                    <fieldset>
                        <div className="form-group">
                        <label htmlFor="age">Activity Type: </label>
                        <select defaultValue="" name="age" ref={Type} id="employeeLocation" className="form-control" >
                        <option value="1">Select Activity Type</option>
                        <option value="2">Chores</option>
                        <option value="3">Classes</option>
                        <option value="4">Special Events</option>
                        </select>
                        </div>
                        </fieldset>
        
                        <fieldset>
                        <div className="form-group">
                        <label htmlFor="age">Time Limit: </label>
                        <select defaultValue="" name="age" ref={Time} id="employeeLocation" className="form-control" >
                        <option value="1">Select Time Limit</option>
                        <option value="2">15 mins</option>
                        <option value="3">30 mins</option>
                        <option value="4">45 mins</option>
                        <option value="4">60 mins(1 hr)</option>
                        <option value="4"> 90 mins</option>
                        <option value="4"> 120 mins(2 hr)</option>
                        </select>
                        </div>
                        </fieldset>
                        
                <fieldset>
                <div className="form-group">
                <label htmlFor="age">RewardPoints: </label>
                <select defaultValue="" name="age" ref={Rewards} id="employeeLocation" className="form-control" >
                <option value="1">Reward Points</option>
                <option value="2">25 pts</option>
                <option value="3">50 pts</option>
                <option value="4">75 pts</option>
                <option value="4">100 pts</option>
                </select>
                </div>
                </fieldset>

                <button type="submit"
                onClick={evt => {
                    evt.preventDefault() // Prevent browser from submitting the form
                    ConstructNewActivity()
                }}
                className="btn btn-primary">
                Save Activity
            </button>
                </form>
)
}