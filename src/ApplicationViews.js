import React from "react"
import { Route } from "react-router-dom"
import {Userprovider} from "./parents/ParentsDataprovider"
import {Activityform} from "./Activities/ActivityForm"
import {ParentsDashboard} from "./parents/ParentsDashBoard"
import {NewKidsform} from "./parents/AddKidsForm"
import {ActivityProvider} from "./Activities/Activitydataprovider"

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
            <Route exact path="/activities/create/:kidsId(\d+)" render={
                 props => <Activityform {...props} />
             } />
            </ActivityProvider>
            
             <Route exact path="/kids/create" render={
                 props => <NewKidsform {...props} />
             } />
        </Userprovider>
        </>
    )
}