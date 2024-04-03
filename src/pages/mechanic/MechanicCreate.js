import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const MechanicCreate = () => {
  const navigate = useNavigate();

  // Initialize state variables to hold mechanic details
  const [mechanics, setMechanics] = useState([]);
  // Initialize state variables for form inputs
  const [newMechanicData, setNewMechanicData] = useState({
    id: "",
    fullName: "",
    expertDomain: "",
    experience: "",
  });

  useEffect(() => {
    const existingMechanic =
      JSON.parse(localStorage.getItem("mechanics")) || [];
    setMechanics(existingMechanic);
  }, []);

  // Function to handle changes in form inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewMechanicData({ ...newMechanicData, [name]: value });
  };

  // Function to add a new mechanic
  const addMechanic = () => {
    // Generate a unique ID for the new mechanic
    const id = Math.floor(Math.random() * 10000);
    const newMechanic = {
      id,
      fullName: newMechanicData.fullName,
      expertDomain: newMechanicData.expertDomain,
      experience: newMechanicData.experience,
    };

    // Update state
    setMechanics([...mechanics, newMechanic]);
    // Update local storage
    localStorage.setItem(
      "mechanics",
      JSON.stringify([...mechanics, newMechanic])
    );

    // Reset form inputs
    setNewMechanicData({
      id: "",
      fullName: "",
      expertDomain: "",
      experience: "",
    });

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
              value={newMechanicData.fullName}
              onChange={handleInputChange}
            />
          </div>

          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              name="expertDomain"
              placeholder="Expert Domain"
              value={newMechanicData.expertDomain}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <input
              type="number"
              className="form-control"
              name="experience"
              placeholder="Experience (years)"
              value={newMechanicData.experience}
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
