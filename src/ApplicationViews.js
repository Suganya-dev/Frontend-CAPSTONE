import React from "react"
import { Route } from "react-router-dom"
import {Userprovider} from "./parents/ParentsDataprovider"
import {UserList} from "./Users/UserList"
import {Activityform} from "./parents/ParentActivityForm"
import {ParentsDashboard} from "./parents/ParentsDashBoard"

export const ApplicationViews = (props) =>{
    return (
        <>
        <Userprovider>
        <Route exact path="/">
            <ParentsDashboard {...props}/>
                </Route> 
           
            <Route exact path="/users/create" render={
                 props => <Activityform {...props} />
             } />
             
        </Userprovider>
        </>
    )
}