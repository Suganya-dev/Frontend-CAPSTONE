import React, { useState, useEffect, useContext } from "react"
import {ActivityContext} from "../Activities/Activitydataprovider"
import {userContext} from "../parents/ParentsDataprovider"
import {ActivityTypeContext} from "../ActivityType/ActivityTypeProvider"
import {RewardTypeContext} from "../ActivityType/RewardTypeProvider"
import {ActivityCard} from "../Activities/Activity"
import {KidActivityDetail} from "./KidActivityDetail"
import "../Activities/Activity.css"
import "./Kids.css"

// importing datas using usecontext
export const KidsDetail =(props) => {
    const{activities,getActivity} = useContext(ActivityContext)
    const{users, getUsers} = useContext(userContext)
    const{activityTypes,getActivityType} = useContext(ActivityTypeContext)
    const{rewardTypes,getRewardPoints} = useContext(RewardTypeContext)

    const[Kidactivities,setKidactivities] = useState([])
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
    setKidactivities(findActivity)
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
             Kidactivities.filter(a=>a.isCompleted === false).map(activityObj =>  {
            const findActivityType = activityTypes.find(t => t.id === activityObj.activityTypeId) || {}
            const findRewards = rewardTypes.find(r => r.id === activityObj.rewardTypeId) 
            
         return <KidActivityDetail key={activityObj.id} activityObj={activityObj}
         activityType={findActivityType} rewardType={findRewards}/>
        })
}
   {
       Kidactivities.map(act =>{ 
           if (act.isCompleted){
               return(
        <ActivityCard key={act.id} Activity ={act} to={`/users/${act.id}`} />)}})

           }
         </>
  )}

