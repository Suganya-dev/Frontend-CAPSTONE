import React from "react"
import "./User.css"

export const Usercard = ({users}) =>(
    <section className="users">
    <h3 className="users__name">{users.name}</h3> 
    <div className="users__place">{users.email}</div>
</section>
)