import React from "react"
import { Route } from "react-router-dom"
import {Userprovider} from "./parents/ParentsDataprovider"
import {Activityform} from "./Activities/ActivityForm"
import {ParentsDashboard} from "./parents/ParentsDashBoard"
import {NewKidsform} from "./parents/AddKidsForm"
import {ActivityProvider} from "./Activities/Activitydataprovider"
import {ActivityTypeProvider} from "./ActivityType/ActivityTypeProvider"
import {ActivityDetail} from "./Activities/Activitydetail"
import {ActivityEditForm} from "./Activities/ActivityEditForm"
import {KidsDashBoard} from "./KidsDashBoard/KidsDashBoard"
import {KidsDetail} from "./KidsDashBoard/KidsDetail"
import {RewardTypeProvider} from "./ActivityType/RewardTypeProvider"
export const ApplicationViews = (props) =>{
    return (
        <>
        <Userprovider>
            <ActivityProvider> 
                <Route exact path="/">
            <ParentsDashboard {...props}/>
                </Route> 
                </ActivityProvider>
           
          
          <ActivityProvider>
              <ActivityTypeProvider>
              
            <Route exact path="/activities/create/:kidsId(\d+)" render={
                props => <Activityform {...props} />
             } />
             {/* New route for showing activity details */}
            <RewardTypeProvider>
            <Route path="/activities/:activityId(\d+)" render={
                props => <ActivityDetail {...props} />
            } />
            <Route path="/activities/edit/:activityId(\d+)" render={
            props => <ActivityEditForm {...props} />
            } />
            </RewardTypeProvider>
            </ActivityTypeProvider>
            </ActivityProvider>
            
             <Route exact path="/kids/create" render={
                 props => <NewKidsform {...props} />
             } />
       
       <ActivityProvider> 
            <Route exact path="/users">
            <KidsDashBoard {...props}/>
                </Route> 

       <ActivityTypeProvider> 
         <Route path="/users/:userId(\d+)" render={
         props => <KidsDetail {...props} />
            } />
                </ActivityTypeProvider>
                </ActivityProvider>
                </Userprovider>
            
        </>
    )
}