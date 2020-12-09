import React, { useContext, useRef, useEffect } from "react"
import { userContext } from "./Userdataprovider"
import "./User.css"

export const Userform = (props) =>{
 const{addUsers,getUsers} = useContext(userContext)
}

const name = useRef(null)
const age = useRef(null)
const place= useRef(null)

useEffect(() => {
    getUsers()
},[])

const constructNewChild = () =>{
    const kidsName = name.current.value
    const ageId = age.current.value
    const placeId = place.current.value

if(kidsName === ""|| ageId === 0 || placeId === 0){
    window.alert("Please select a age and place and provide your Kidsname")  
} else{
    addUsers({
        name: kidsName,
        ageId,
        placeId
    })
    .then(() => props.history.push("/users"))
}


return (
    <form className="userForm">
        <h2 className="userForm__title">Add New Kids</h2>
        <fieldset>
            <div className="form-group">
                <label htmlFor="employeeName">Kids name: </label>
                <input type="text" id="employeeName" ref={name} required autoFocus className="form-control" placeholder="Kid name" />
            </div>
        </fieldset>
        <fieldset>
                <div className="form-group">
                <label htmlFor="location">Kid's Age: </label>
                <select defaultValue="" name="location" ref={location} id="employeeLocation" className="form-control" >
                <option value="0">Select a location</option>
                    {locations.map(e => (
                    <option key={e.id} value={e.id}>
                        {e.name}
                    </option>
                    ))}
                    </select>
                </div>
            </fieldset>

            <button type="submit"
                onClick={evt => {
                    evt.preventDefault() // Prevent browser from submitting the form
                    constructNewChild()
                }}
                className="btn btn-primary">
                Save Child
            </button>
            </form> 
)
            }