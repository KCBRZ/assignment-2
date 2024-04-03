import React, { useState, useEffect } from "react";
import "./MechanicList.css"; // Import CSS file for component styling

const MechanicList = () => {
  // Initialize state variables to hold mechanic details
  const [mechanics, setMechanics] = useState([]);
  // Initialize state variables for form inputs
  const [newMechanicData, setNewMechanicData] = useState({
    id: "",
    fullName: "",
    expertDomain: "",
    experience: "",
  });

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
  };

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
    <div className="mechanic-list-container">
      {/* Form for adding a new mechanic */}
      <h2>Add New Mechanic</h2>
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
      <h2>Mechanic List</h2>
      <ul className="mechanic-list">
        {mechanics.map((mechanic) => (
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
        ))}
      </ul>
    </div>
  );
};

export default MechanicList;
