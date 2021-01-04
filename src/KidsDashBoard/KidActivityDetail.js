import React,{useContext,useState} from "react"
import Button from 'react-bootstrap/Button'
import {ActivityContext} from "../Activities/Activitydataprovider"
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'
import "./Kids.css"


export const KidActivityDetail = ({activityObj,activityType,rewardType}) => {
  const { width, height } = useWindowSize()
  const[confetti,setConfetti] = useState(false)
  const{completeActivity} = useContext(ActivityContext)
  const kidId = localStorage.getItem("kidschorepad_user")

  const completeCurrentActivity = () => {
    const completedActivityObject = {
    id:activityObj.id,
    isCompleted: true,
      }
      setConfetti(true)
      completeActivity(completedActivityObject)
      // console.log(confetti)
      setTimeout(() => { window.alert(`Congrats,
    You earned ${rewardType.points} reward points`)
      },1000)}
   

return (
  
  <section className = "activity">
<Confetti
    className = "confetti"
    run = {true}
    width={width}
    height={height}
  />
<h3 className="activity__name">Activity Name: {activityObj.name}</h3>
<h3 className="activity__date">Date: {activityObj.date}</h3>
<h3 className="activity__type">Activity Type: {activityType ? activityType.name: ""}</h3>
<h3 className="activity__time">Time limit: {activityObj.timeLimit}</h3>
<h3 className="activity__rewards">Reward points: {rewardType ? rewardType.points : ""}</h3>
  
<section className="button">
<Button  variant="primary"  className="button" type="submit" 
onClick={() => 
{completeCurrentActivity()}}
> Completed Activity </Button>
</section>
</section>)
}