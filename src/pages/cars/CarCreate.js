import React, { useState } from "react";
import "../../CarList.css"; // Import CSS file for component styling
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

const CarCreate = () => {
  const navigate = useNavigate();
  const [car, setCar] = useState({
    make: "",
    model: "",
    colour: "",
    year: "",
    platenumber: "",
    fault: "",
  });

  // Function to handle changes in form inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setCar((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Function to add a new car
  const addCar = async () => {
    // Generate a unique ID for the new car
    const id = String(Math.floor(Math.random() * 10000));
    const newCar = { id, ...car };

    await axios.post(`http://localhost:8000/cars`, newCar);
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
          value={car.make}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="model"
          placeholder="Model"
          value={car.model}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="colour"
          placeholder="Colour"
          value={car.colour}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="year"
          placeholder="Year"
          value={car.year}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="platenumber"
          placeholder="Plate Number"
          value={car.platenumber}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="fault"
          placeholder="Fault"
          value={car.fault}
          onChange={handleInputChange}
        />
        <button onClick={addCar}>Add Car</button>
      </div>
      <br></br>
    </div>
  );
};

export default CarCreate;
