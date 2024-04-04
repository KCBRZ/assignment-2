import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

const Mechanic = () => {
  const navigate = useNavigate();
  // Initialize state variables to hold mechanic details
  const [mechanics, setMechanics] = useState([]);

  // Function to delete a mechanic
  const deleteMechanic = async (id) => {
    var result = window.confirm(
      "Are you sure want to delete the selected mechanic?"
    );
    if (result) {
      await axios.delete(`http://localhost:8000/mechanic/${id}`);
      window.alert("Mechanic successfully deleted");
    }
  };

  // Function to edit a mechanic
  const editMechanic = (id) => navigate(`/mechanic/${id}`);

  // load mechanic details
  const mechanicDetails = async () => {
    const fetchMechanic = await axios.get(`http://localhost:8000/mechanic`);
    setMechanics(fetchMechanic.data);
  };

  // Load data from local storage when component mounts
  useEffect(() => {
    mechanicDetails();
  }, [mechanicDetails]);

  return (
    <>
      <h2>Mechanic List</h2>
      <div className="d-flex justify-content-between">
        <NavLink to={"/mechanic/create"} className="btn btn-sm btn-primary">
          Add New Mechanic
        </NavLink>
        <NavLink to={"/"} className="btn btn-sm btn-secondary">
          Dashboard
        </NavLink>
      </div>
      <br></br>
      <ul className="mechanic-list">
        {mechanics.length > 0 ? (
          mechanics.map((mechanic) => (
            <li key={mechanic.id} className="mechanic-item">
              <div className="mechanic-details">
                <div className="row">
                  <div className="col-6">
                    <strong>ID:</strong> {mechanic.id}
                  </div>
                  <div className="col-6">
                    <button
                      className="m-2 btn btn-sm btn-primary"
                      onClick={() => deleteMechanic(mechanic.id)}
                    >
                      Delete
                    </button>
                    <button
                      className="btn btn-sm btn-primary"
                      onClick={() => editMechanic(mechanic.id)}
                    >
                      Edit
                    </button>
                  </div>
                </div>
                <strong>Full Name:</strong> {mechanic.fullName}
                <br />
                <strong>Expert Domain:</strong> {mechanic.expertDomain}
                <br />
                <strong>Experience:</strong> {mechanic.experience} years
                <br />
                <br />
              </div>
              <div className="mechanic-actions"></div>
            </li>
          ))
        ) : (
          <p>Sorry, there are no any car</p>
        )}
      </ul>
    </>
  );
};

export default Mechanic;
