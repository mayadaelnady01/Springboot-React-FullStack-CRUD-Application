import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link,useNavigate,useParams } from "react-router-dom";

export default function EditUser(){

    let navigate = useNavigate();
    const{id}=useParams();

    const [user,setUser] =useState({
        name:"",
        username:"",
        email:""
    });
    const{name,username,email}=user;
    const onInputChange=(e)=>{

        setUser({...user,[e.target.name]: e.target.value});
    };

    useEffect(()=>{
        loadUser()
},[]);
    const onSubmit= async (e)=>{
       e.preventDefault();
       await axios.put(`http://localhost:8086/user/${id}`,user);
       navigate("/");    
    };
    const loadUser = async () => {
        try {
          const result = await axios.get(`http://localhost:8086/user/${id}`);
          setUser(result.data);
        } catch (err) {
          console.error("Failed to load user:", err);
        }
      };      
    return(
        <div className="container">
            <div className="row">
               <div className="col-md-6 offset-md-3 border rounded p-4 mt-3 mb-3 ">
                <h3 className="text-center- m-2">Edit User</h3>
                <form onSubmit={(e)=>onSubmit(e)}>
                <div className="mb-3">
                    <label htmlFor="Name" className="form-label">ID</label>
                    <input type={"text"} className="form-control" placeholder="eg.12" name="id" value={id} readOnly />
                </div>
                <div className="mb-3">
                    <label htmlFor="Name" className="form-label"> Full Name</label>
                    <input type={"text"} className="form-control" placeholder="eg.Ethan Reynolds" name="name" value={name} onChange={(e)=>onInputChange(e)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="Name" className="form-label">Username</label>
                    <input type={"text"} className="form-control" placeholder="eg.ethanr23" name="username" value={username} onChange={(e)=>onInputChange(e)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="Name" className="form-label">Email</label>
                    <input type={"text"} className="form-control" placeholder="eg.ethan.reynolds23@example.com" name="email" value={email} onChange={(e)=>onInputChange(e)} />
                </div>
                <button type="submit" className="btn btn-outline-secondary">Submit</button>
                <Link className="btn btn-outline-danger ms-4" to="/">Cancel</Link>
                </form>
               </div>
            </div>
                    </div>
    )
}