import React from "react"
import { Route } from "react-router-dom"
import {Userprovider} from "./Users/Userdataprovider"
import {UserList} from "./Users/UserList"

export const ApplicationViews = (props) =>{
    return (
        <>
        <Userprovider>
        <Route path="/Users">
            <UserList/>
                </Route>   
        </Userprovider>
        </>)
}