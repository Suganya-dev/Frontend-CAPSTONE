import React, { useContext, useRef, useEffect } from "react"
import { ActivityContext } from "./Activitydataprovider"
import "./Activity.css"

//   // Use the required context providers for data
export const Activityform = (props) =>{
    const{addActivity,getActivity} = useContext(ActivityContext)

    const Name = useRef(null)
    const Type = useRef(null)
    const Time = useRef(null)
    const Rewards = useRef(null)

//    // Component state
//    const [Activity, setActivity] = useState({})

    // // Is there a a URL parameter??
    // const editMode = props.match.params.hasOwnProperty("animalId")

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
                        <option value="Chores">Chores</option>
                        <option value="Classes">Classes</option>
                        <option value="Special Events">Special Events</option>
                        </select>
                        </div>
                        </fieldset>
        
                        <fieldset>
                        <div className="form-group">
                        <label htmlFor="age">Time Limit: </label>
                        <select defaultValue="" name="age" ref={Time} id="employeeLocation" className="form-control" >
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
                <select defaultValue="" name="age" ref={Rewards} id="employeeLocation" className="form-control" >
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