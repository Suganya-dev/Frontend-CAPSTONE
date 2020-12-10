import React from "react"
import "./Parent.css"

export const Kidcard = ({kiduser}) =>(
    <section className="users">
    <h3 className="kiduser__name">{kiduser.name}</h3>
  </section>
)

