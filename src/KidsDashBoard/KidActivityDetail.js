import React, { useState, useEffect, useContext } from "react"
import {ActivityTypeContext} from "../ActivityType/ActivityTypeProvider"
import {RewardTypeContext} from "../ActivityType/RewardTypeProvider"
import Button from 'react-bootstrap/Button'
import {ActivityCard} from "../Activities/Activity"

export const CompleteActivity =() =>{

  const{activityTypes,getActivityType} = useContext(ActivityTypeContext)
    const{rewardTypes,getRewardPoints} = useContext(RewardTypeContext)

useEffect (() => {
      getActivityType()
      .then(getRewardPoints)
    },[])

const KidsActivityDetail = () => {
return(
    <>
    
  <h2 className="kiduser__name">Name:{kidusers.name}</h2>
     {
          Activity.map(a =>  {
              const findActivityType = activityTypes.find(t => t.id === a.activityTypeId) || {}
              const findRewards = rewardTypes.find(r => r.id === a.rewardTypeId)
           return <section className = "activity">
           <h3 className="activity__name">Activity Name: {a.name}</h3>
          <h3 className="activity__date">Date: {a.date}</h3>
          <h3 className="activity__type">Activity Type: {findActivityType ? findActivityType.name: ""}</h3>
          <h3 className="activity__time">Time limit: {a.timeLimit}</h3>
          <h3 className="activity__rewards">Reward points: {findRewards ? findRewards.points : ""}</h3>
             

 <Button onClick={() => {
  props.history.push("/users")}}
  > Completed Activity </Button>
  </section>})
}
 {
     Activity.map(act =>{ 
         if (act.isCompleted){
           <KidsActivityDetail{...props}/>
         }else{
          return(
            <ActivityCard key={act.id} Activity ={act} to={"/users"} />
         )}
         })
        }
    </>

)}
}
