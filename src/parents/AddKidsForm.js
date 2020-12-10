import React, { useContext, useRef, useEffect } from "react"
import { userContext } from "../parents/ParentsDataprovider"
import "./Parent.css"

export const NewKidsform = (props) =>{
    const{getUsers,addUsers} = useContext(userContext)

    const name = useRef(null)
    const email = useRef(null)
    const password = useRef(null)
    const age = useRef(null)
    const grade= useRef(null)

    useEffect(() =>{
        getUsers()
    },[])

    const constructNewChild = () =>{
        const kidsName = name.current.value
        const kidsemail = email.current.value
        const kidspassword = password.current.value
       const parsedage = parseInt(age.current.value)
       const kidsgrade = grade.current.value

    if(name === "" || email === ""|| password === "" || age === 0 || grade ===""){
        window.alert("Please select a Kidsname,age,email,password, and provide your grade")     
    }else{
        addUsers({
            name:kidsName,
            email:kidsemail,
            password:kidspassword,
            age:parsedage,
            grade:kidsgrade
        }) 
        .then(() => props.history.push("/kids"))
    }}
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
                <label htmlFor="employeeName">Email: </label>
                <input type="text" id="employeeName" ref={email} required autoFocus className="form-control" placeholder="email" />
            </div>
        </fieldset>
        <fieldset>
            <div className="form-group">
                <label htmlFor="employeeName">Password: </label>
                <input type="text" id="employeeName" ref={password} required autoFocus className="form-control" placeholder="password" />
            </div>
        </fieldset>
        <fieldset>
                <div className="form-group">
                <label htmlFor="age">Kid's Age: </label>
                <select defaultValue="" name="age" ref={age} id="employeeLocation" className="form-control" >
                <option value="3">Select a Age</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                 </select>
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                <label htmlFor="age">Kid's Grade: </label>
                <select defaultValue="" name="grade" ref={grade} id="employeeLocation" className="form-control" >
                <option value="0">Select a Grade</option>
                <option value="1">PreSchool</option>
                <option value="2">Kindergarden</option>
                <option value="6">1st Grade</option>
                <option value="7">2nd Grade</option>
                <option value="8">3rd Grade</option>
                <option value="9">4th Grade</option>
                <option value="10">5th Grade</option>
                <option value="11">6th Grade</option>
                <option value="7">7th Grade</option>
                <option value="8">8th Grade</option>
                <option value="9">9th Grade</option>
                <option value="10">10th Grade</option>
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