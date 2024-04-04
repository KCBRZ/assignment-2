import React, { useState, useEffect } from "react";
import "../../CarList.css"; // Import CSS file for component styling
import { NavLink, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const CarEdit = () => {
  const navigate = useNavigate();
  const params = useParams();

  const id = String(params.id);

  // Initialize state variables to hold car details
  const [car, setCar] = useState({
    make: "",
    model: "",
    colour: "",
    year: "",
    platenumber: "",
    fault: "",
  });

  const fetchCarById = async () => {
    const carData = await axios.get(`http://localhost:8000/cars/${id}`);
    setCar(carData.data);
  };

  useEffect(() => {
    fetchCarById();
  }, []);

  // Function to handle changes in form inputs
  const handleInputChange = (e) => {
    setCar((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  // Function to add a new car
  const updateCar = async () => {
    await axios.put(`http://localhost:8000/cars/${id}`, car);
    navigate("/cars");
  };

  return (
    <div className="car-list-container">
      <h2>Update Car</h2>
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
        <button onClick={updateCar}>Update Car</button>
      </div>
      <br></br>
    </div>
  );
};

export default CarEdit;
