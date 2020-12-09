import React, { useContext, useEffect } from "react"
import {UserContext} from "./Userdataprovider"
import { Link } from "react-router-dom"
import "./User.css"

export const UserList = (props) =>{
 const{users, getUsers} = useContext(UserContext);

 useEffect(() =>{
    getUsers()
 },[])

 return(
    <div className="users">
    <h1>Parents Access</h1>
<button onClick={() => props.history.push("/users/create")}>
   Add New Child
</button>
<article className="userList"> 
        {/* each employee has a unique identifier as id */}
        {
            users.map(employee => {
                return <Link key={employee.id} to={`/users/${employee.id}`}>
                            <h3>{employee.name}</h3>
                        </Link>
        })
        }
        </article>
        </div>
    )

}