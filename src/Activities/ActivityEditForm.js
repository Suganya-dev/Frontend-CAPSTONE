import React, { useContext, useEffect, useState } from "react"
import {ActivityContext} from"./Activitydataprovider"
import {ActivityTypeContext} from "../ActivityType/ActivityTypeProvider"
import Button from 'react-bootstrap/Button'
import "./Activity.css"

   // Use the required context providers for data
export const ActivityEditForm = (props) =>{
    const{activities,getActivity,updateActivity} = useContext(ActivityContext)
    const{activityTypes,getActivityType} = useContext(ActivityTypeContext)
    //  console.log(activityTypes)
const[Activity,setActivity] = useState({})

const editMode = props.match.params.hasOwnProperty("activityId")

const handleControlledInputChange = (event) => {
const newActivity = Object.assign({}, Activity)
newActivity[event.target.name] = event.target.value
setActivity(newActivity)
}

const getActivityInEditMode = () => {
    
        const activityId = parseInt(props.match.params.activityId)
        const selectedActivity = activities.find(a => a.id === activityId) || {}
        setActivity(selectedActivity)
    }


// useEffect(() =>{
//     console.log(props.match.params)
//     getActivity()
    
// },[])

useEffect(() =>{
    // console.log(props.match.params)
    getActivityType()
    .then(getActivity)
},[])

useEffect(() =>{
    getActivityInEditMode()
},[activities])

const constructNewActivity = () => {
    const activityId = parseInt(props.match.params.activityId)
    if(activityId === 0){
        window.alert("please select a Name,Type,Time Limit and Rewards Points" )
    }else{
      updateActivity({
        name : Activity.name,
        activityTypeId : Activity.activityTypeId,
        timeLimit : Activity.timeLimit,
        rewardPoints:Activity.rewardPoints,
        id:Activity.id,
        userId:Activity.userId,
        date:Activity.Activitydate,
        isCompleted:Activity.isCompleted
        })
        
        .then(() => props.history.push("/"))
        }
    }
   
    return (
        <form className="ActivityForm">
                    <h2 className="ActivityForm__title">"Update Activity"</h2>
                    <fieldset>
                        <div className="form-group">
                            <label htmlFor="name">Activity Name: </label>
                            <input type="text" name="name" id ="name" required autoFocus className="form-control" placeholder="Activity name"
                                value={Activity.name} onChange={handleControlledInputChange}/>
                        </div>
                    </fieldset>

                 <fieldset>
                    <div className="form-group">
                        <label htmlFor="activityName">Activity Date: </label>
                        <input type="date" name="Activitydate" id="Activitydate" className="form-control" 
                         placeholder="Activity Date" value={Activity.Activitydate} onChange={handleControlledInputChange}/>
                    </div>
                </fieldset>
            
                <fieldset>
                        <div className="form-group">
                        <label htmlFor="type">Activity Type: </label>
                        <select defaultValue="" name="activityTypeId"  id="activityTypeId" className="form-control" 
                          onChange={handleControlledInputChange}>

                        <option value="0">Select Activity Type</option>
                        {activityTypes.map(a => (
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
                        <select defaultValue="" name="timeLimit"  id="timeLimit" className="form-control"
                          value={Activity.timeLimit} onChange={handleControlledInputChange}>
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
                <label htmlFor="age">RewardPoints: </label>
                <select defaultValue="" name="rewardPoints" id="rewardPoints" className="form-control"
                  value ={Activity.rewardPoints} onChange={handleControlledInputChange} >
                <option value="0">Reward Points</option>
                <option value="1">25 pts</option>
                <option value="2">50 pts</option>
                <option value="3">75 pts</option>
                <option value="4">100 pts</option>
                </select>
                </div>
                </fieldset>
                        
                <section className="button">
                <Button variant="primary" className="button" type="submit"
                onClick={evt => {
                    evt.preventDefault() // Prevent browser from submitting the form
                    constructNewActivity()
                }}
                className="btn btn-primary">
                     Save Activity
                </Button>
                </section>
                </form>
)
}
    



