import React from "react"
import "./User.css"

export const Usercard = ({employee}) =>(
    <section className="employee">
    <h3 className="employee__name">{employee.name}</h3>
    <div className="employee__place">{employee.email}</div>
</section>
)