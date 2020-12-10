import React, { useContext, useRef, useEffect } from "react"
import { userContext } from "../parents/ParentsDataprovider"
import "./Parent.css"

export const NewKidsform = (props) =>{
    const{getUsers,addUsers} = useContext(userContext)

    const name = useRef(null)
    const email = useRef(null)
    const password = useRef(null)
    const dob = useRef(null)
 

    useEffect(() =>{
        getUsers()
    },[])

    const constructNewChild = () =>{
        const kidsName = name.current.value
        const kidsemail = email.current.value
        const kidspassword = password.current.value
        const kidsdob = dob.current.value
       const parentId = parseInt(localStorage.getItem("kidschorepad_user"))
      

    if(name === "" || email === ""|| password === "" || dob === ""){
        window.alert("Please select a Kidsname,dob,email and provide your Password")     
    }else{
        addUsers({
            name:kidsName,
            email:kidsemail,
            password:kidspassword,
            dob: kidsdob,
            parentId:parentId
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
                <label htmlFor="employeeName">Birthday: </label>
                <input type="date" id="employeeName" ref={dob} required autoFocus className="form-control" placeholder="Date of Birth" />
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