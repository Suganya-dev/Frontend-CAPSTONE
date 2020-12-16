import React,{ useState} from "react"
export const RewardTypeContext = React.createContext()

export const RewardTypeProvider =(props) =>{
    const{rewards,setRewards}=useState([])
    
const getRewardPoints = () =>{
    return fetch("http://localhost:8088/rewards")
    .then(res => res.json())
    .then(setRewards)
}

const addRewardPoints = (rewardPoints) =>{
    return fetch("http://localhost:8088/rewards",{
        method:"POST",
        headers:{
            "Content-Type": "application/json"
         },
         body: JSON.stringify(rewardPoints)
     })
     .then(getRewardPoints)
    }

    return(
        <>
        <RewardTypeContext.Provider value={
            {
                rewards, getRewardPoints,addRewardPoints
            }}>
                {props.children}
            </RewardTypeContext.Provider>
            </>
    )}
