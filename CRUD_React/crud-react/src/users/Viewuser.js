import axios from "axios";
import React, { useEffect,useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewUser() {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
  });

  const { id } = useParams();

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8086/user/${id}`);
    setUser(result.data);
  };

    return(
        <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3 border rounded p-4 mt-3 mb-3">
            <h2 className="text-center m-4">User Details</h2>
  
            <div className="card">
                <div>
                <ul className="list-group list-group-flush">
                <li className="list-group-item">
                    <b>Details of user with the id : </b>
                    {user.id}
                  </li>
                  <li className="list-group-item">
                    <b>Name : </b>
                    {user.name}
                  </li>
                  <li className="list-group-item">
                    <b>UserName : </b>
                    {user.username}
                  </li>
                  <li className="list-group-item">
                    <b>Email : </b>
                    {user.email}
                  </li>
                </ul>
              </div>
            </div>
            <Link className="btn btn-outline-secondary ms-2 mt-3" to={"/"}>
              Back to Home
            </Link>
                </div>
                </div>
                </div>
    )
}