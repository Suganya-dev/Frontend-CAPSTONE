import React,{ useState} from "react"
export const RewardTypeContext = React.createContext()

export const RewardTypeProvider =(props) =>{
    const[rewardTypes,setRewards]=useState([])
    
const getRewardPoints = () =>{
    return fetch("http://localhost:8088/rewardTypes")
    .then(res => res.json())
    .then(setRewards)
}

const addRewardPoints = (rewardPoints) =>{
    return fetch("http://localhost:8088/rewardTypes",{
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
                rewardTypes, getRewardPoints,addRewardPoints
            }}>
                {props.children}
            </RewardTypeContext.Provider>
            </>
    )}

                            