import React, { useState, useEffect } from "react";
import "../../CarList.css"; // Import CSS file for component styling
import { NavLink, useNavigate } from "react-router-dom";

const CarCreate = () => {
  const navigate = useNavigate();
  // Initialize state variables to hold car details
  const [cars, setCars] = useState([]);
  // Initialize state variables for form inputs
  const [newCarData, setNewCarData] = useState({
    make: "",
    model: "",
    colour: "",
    year: "",
    platenumber: "",
    fault: "",
  });

  useEffect(() => {
    // Retrieve existing data from local storage when the component mounts
    const existingCars = JSON.parse(localStorage.getItem("cars")) || [];
    setCars(existingCars);
  }, []);

  // Function to handle changes in form inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCarData({ ...newCarData, [name]: value });
  };

  // Function to add a new car
  const addCar = () => {
    // Generate a unique ID for the new car
    const id = Math.floor(Math.random() * 10000);
    const newCar = { id, ...newCarData };

    // Update state
    setCars([...cars, newCar]);
    // Update local storage
    localStorage.setItem("cars", JSON.stringify([...cars, newCar]));

    // Reset form inputs
    setNewCarData({
      make: "",
      model: "",
      colour: "",
      year: "",
      platenumber: "",
      fault: "",
    });

    navigate("/cars");
  };

  return (
    <div className="car-list-container">
      <h2>Add New Car</h2>
      <div className="d-flex justify-content-between">
        <NavLink to={"/cars"} className="btn btn-sm btn-primary">
          Car List
        </NavLink>
        <NavLink to={"/"} className="btn btn-sm btn-secondary">
          Dashboard
        </NavLink>
      </div>
      <br></br>
      <div className="add-car-form">
        <input
          type="text"
          name="make"
          placeholder="Make"
          value={newCarData.make}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="model"
          placeholder="Model"
          value={newCarData.model}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="colour"
          placeholder="Colour"
          value={newCarData.colour}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="year"
          placeholder="Year"
          value={newCarData.year}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="platenumber"
          placeholder="Plate Number"
          value={newCarData.platenumber}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="fault"
          placeholder="Fault"
          value={newCarData.fault}
          onChange={handleInputChange}
        />
        <button onClick={addCar}>Add Car</button>
      </div>
      <br></br>
    </div>
  );
};

export default CarCreate;
