import React, { useContext, useEffect } from "react"
import {userContext} from "./Userdataprovider"
import { Link } from "react-router-dom"
import {Usercard} from "./User"
import "./User.css"

export const UserList = () =>{
 const{user, getUsers} = useContext(userContext);

 useEffect(() =>{
    getUsers()
 },[])

//  return (
//     <div className="Users">
//     {
//         user.map(cust => <Usercard key={cust.id} users={cust} />)
//     }
//     </div>
// )
// }


 return(
    <div className="users">
    <h1>Parents Access</h1>
<button onClick={() => props.history.push("/users/create")}>
   Add New Child
</button>
<article className="userList"> 
        /* each employee has a unique identifier as id */
        {
            user.map(employee => {
                return <Link key={employee.id} to={`/users/${employee.id}`}>
                            <h3>{employee.name}</h3>
                        </Link>
        })
        }
        </article>
        </div>
    )

}