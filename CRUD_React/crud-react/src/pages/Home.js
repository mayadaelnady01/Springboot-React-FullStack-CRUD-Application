import React, {useEffect,useState} from "react";
import axios from "axios";
import { Link,useParams } from 'react-router-dom';

export default function Home(){
    const[users,setUsers]=useState([]);
    const{id}=useParams();

    useEffect(()=>{

        loadUsers();
    },[]);
    const loadUsers=async()=>{
        const result= await axios.get("http://localhost:8086/user/users");
        setUsers(result.data);
    }
    const deleteUser=async(id)=>{
      await axios.delete(`http://localhost:8086/user/${id}`)
      loadUsers()
    }
    return(
        <div className='container'>
             <div className='py-4'>
             <table className="table">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Full Name</th>
      <th scope="col">Username</th>
      <th scope="col">email</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
  {users.map((user, index) => (
    <tr key={index}>
      <th scope="row">{user.id}</th>
      <td>{user.name}</td>
      <td>{user.username}</td>
      <td>{user.email}</td>
      <td>
      <Link type="button" className="btn btn-outline-primary" to={`/viewuser/${user.id}`}>View</Link>
      <Link className="btn btn-outline-secondary ms-2" to={`/edituser/${user.id}`}>Edit</Link>
      <button className="btn btn-outline-danger ms-2" onClick={()=>deleteUser(user.id)}>Delete</button>

      </td>
    </tr>
  ))}
</tbody>
</table>
             </div>
        </div>
    )
}