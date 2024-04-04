import axios from "axios";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const MechanicCreate = () => {
  const navigate = useNavigate();

  const [mechanic, setMechanic] = useState({
    fullName: "",
    expertDomain: "",
    experience: "",
  });

  // Function to handle changes in form inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMechanic((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Function to add a new mechanic
  const addMechanic = async () => {
    // Generate a unique ID for the new mechanic
    const id = String(Math.floor(Math.random() * 10000));
    const newMechanic = { id, ...mechanic };

    await axios.post(`http://localhost:8000/mechanic`, newMechanic);
    navigate("/mechanic");
  };

  return (
    <>
      <div className="mechanic-list-container">
        <h2>Add New Mechanic</h2>
        <div className="d-flex justify-content-between">
          <NavLink to={"/mechanic"} className="btn btn-sm btn-primary">
            Mechanic List
          </NavLink>
          <NavLink to={"/"} className="btn btn-sm btn-secondary">
            Dashboard
          </NavLink>
        </div>
        <br></br>
        <div className="add-mechanic-form">
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              name="fullName"
              placeholder="Full Name"
              value={mechanic.fullName}
              onChange={handleInputChange}
            />
          </div>

          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              name="expertDomain"
              placeholder="Expert Domain"
              value={mechanic.expertDomain}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <input
              type="number"
              className="form-control"
              name="experience"
              placeholder="Experience (years)"
              value={mechanic.experience}
              onChange={handleInputChange}
            />
          </div>
          <button
            type="button"
            className="btn btn-primary btn-md"
            onClick={addMechanic}
          >
            Add Mechanic
          </button>
        </div>
        <br></br>
      </div>
    </>
  );
};

export default MechanicCreate;
