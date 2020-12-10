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
          
                <Route exact path="/">
            <ParentsDashboard {...props}/>
                </Route> 
           
            <Route exact path="/activities/create" render={
                 props => <Activityform {...props} />
             } />
             <Route exact path="/kids/create" render={
                 props => <NewKidsform {...props} />
             } />
              
        </Userprovider>
        </>
    )
}