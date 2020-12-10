import React from "react"
import "./Parent.css"

export const Kidcard = (props) =>{
    
    {console.log(props)}
    return <section className="users">
    <h3 className="kiduser__name">Name:{props.kiduser.name}</h3>

    <button  onClick={() => props.history.push(`/activities/create/${props.kiduser.id}`)}>
    Add Activity
   </button>
  
</section>
}

