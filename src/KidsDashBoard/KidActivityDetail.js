import React,{useContext} from "react"
import Button from 'react-bootstrap/Button'
import {ActivityContext} from "../Activities/Activitydataprovider"
import "./Kids.css"


export const KidActivityDetail = ({activityObj,activityType,rewardType}) => {

  const{completeActivity} = useContext(ActivityContext)
  const kidId = localStorage.getItem("kidschorepad_user")

  const completeCurrentActivity = () => {
    const completedActivityObject = {
    id:activityObj.id,
    isCompleted: true,
      }
    completeActivity(completedActivityObject)
    window.alert(`You earned ${rewardType.points} reward points`)
  }
return (
<section className = "activity">
<h3 className="activity__name">Activity Name: {activityObj.name}</h3>
<h3 className="activity__date">Date: {activityObj.date}</h3>
<h3 className="activity__type">Activity Type: {activityType ? activityType.name: ""}</h3>
<h3 className="activity__time">Time limit: {activityObj.timeLimit}</h3>
<h3 className="activity__rewards">Reward points: {rewardType ? rewardType.points : ""}</h3>
  
<section className="button">
<Button  variant="primary"  className="button" type="submit" 
onClick={() => {completeCurrentActivity()}}
> Completed Activity </Button>
</section>
</section>)
}