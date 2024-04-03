import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Mechanic = () => {
  // Initialize state variables to hold mechanic details
  const [mechanics, setMechanics] = useState([]);

  // Function to delete a mechanic
  const deleteMechanic = (mechanicId) => {
    // Update state
    setMechanics(mechanics.filter((mechanic) => mechanic.id !== mechanicId));
    // Update local storage
    localStorage.setItem(
      "mechanics",
      JSON.stringify(mechanics.filter((mechanic) => mechanic.id !== mechanicId))
    );
  };

  // Function to edit a mechanic
  const editMechanic = (mechanicId, updatedMechanic) => {
    // Update state
    setMechanics(
      mechanics.map((mechanic) =>
        mechanic.id === mechanicId ? updatedMechanic : mechanic
      )
    );
    // Update local storage
    localStorage.setItem(
      "mechanics",
      JSON.stringify(
        mechanics.map((mechanic) =>
          mechanic.id === mechanicId ? updatedMechanic : mechanic
        )
      )
    );
  };

  // Load data from local storage when component mounts
  useEffect(() => {
    const storedMechanics = localStorage.getItem("mechanics");
    if (storedMechanics) {
      setMechanics(JSON.parse(storedMechanics));
    }
  }, []);

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
                      onClick={() =>
                        editMechanic(mechanic.id, {
                          ...mechanic,
                          fullName: "Updated Name",
                        })
                      }
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
