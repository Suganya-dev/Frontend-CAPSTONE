import React, { useContext, useEffect, useState } from "react"
import {ActivityContext} from"./Activitydataprovider"
import "./Activity.css"

export const ActivityEditForm = (props) =>{
    const{activities,getActivity,updateActivity} = useContext(ActivityContext)

const[Activity,setActivity] = useState({})

const editMode = props.match.params.hasOwnProperty("activityId")

const handleControlledInputChange = (event) => {
const newActivity = Object.assign({}, Activity)
newActivity[event.target.name] = event.target.value
setActivity(newActivity)
}

const getActivityInEditMode = () => {
    if (editMode) {
        const activityId = parseInt(props.match.params.activityId)
        const selectedActivity = activities.find(a => a.id === activityId) || {}
        setActivity(selectedActivity)
    }
}

useEffect(() =>{
    getActivity()
},[])

useEffect(() =>{
    getActivityInEditMode()
},[activities])

const constructNewActivity = () => {

    if(ActivityName === "" || ActivityType === "" || TimeLimit ==="" ||
    RewardPoints === ""){
        window.alert("please select a Name,Type,Time Limit and Rewards Points")
    }else{
        if(editMode){
            updateActivity({
                Name : Activity.Name,
                Type : Activity.Type,
                Time : Activity.Time,
                Rewards:Activity.Rewards,
                kidsId:kidsId
        })
        .then(() => props.history.push("/activities"))
        }}
    }
    return (
        <form className="ActivityForm">
                    <h2 className="ActivityForm__title">New Activity</h2>
                    <fieldset>
                        <div className="form-group">
                            <label htmlFor="employeeName">Activity Name: </label>
                            <input type="text" id="employeeName" ref={Name} required autoFocus className="form-control" placeholder="Activity name"
                             onChange={handleControlledInputChange}/>
                        </div>
                    </fieldset>
            
                    <fieldset>
                        <div className="form-group">
                        <label htmlFor="age">Activity Type: </label>
                        <select defaultValue="" name="age" ref={Type} id="employeeLocation" className="form-control" 
                        onChange={handleControlledInputChange}>
                        <option value="1">Select Activity Type</option>
                        <option value="Chores">Chores</option>
                        <option value="Classes">Classes</option>
                        <option value="Special Events">Special Events</option>
                        </select>
                        </div>
                        </fieldset>
                
                        <fieldset>
                        <div className="form-group">
                        <label htmlFor="age">Time Limit: </label>
                        <select defaultValue="" name="age" ref={Time} id="employeeLocation" className="form-control"
                         onChange={handleControlledInputChange} >
                        <option value="1">Select Time Limit</option>
                        <option value="15 mins">15 mins</option>
                        <option value="30 mins">30 mins</option>
                        <option value="45 mins">45 mins</option>
                        <option value="60 mins(1 hr)">60 mins(1 hr)</option>
                        <option value=" 90 mins"> 90 mins</option>
                        <option value=" 120 mins(2 hr)"> 120 mins(2 hr)</option>
                        </select>
                        </div>
                        </fieldset>

                        <fieldset>
                <div className="form-group">
                <label htmlFor="age">RewardPoints: </label>
                <select defaultValue="" name="age" ref={Rewards} id="employeeLocation" className="form-control"
                 onChange={handleControlledInputChange} >
                <option value="1">Reward Points</option>
                <option value="25 pts">25 pts</option>
                <option value="50 pts">50 pts</option>
                <option value="75 pts">75 pts</option>
                <option value="100 pts">100 pts</option>
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
    



