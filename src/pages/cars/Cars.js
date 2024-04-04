import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

const Cars = () => {
  const navigate = useNavigate();

  // Initialize state variables to hold car details
  const [cars, setCars] = useState([]);

  // Function to delete a car
  const deleteCar = async (id) => {
    var result = window.confirm(
      "Are you sure want to delete the selected car?"
    );
    if (result) {
      await axios.delete(`http://localhost:8000/cars/${id}`);
      window.alert("car successfully deleted");
    }
  };

  // Function to edit a car
  const editCar = (id) => navigate(`/cars/${id}`);

  // load car details
  const carDetails = async () => {
    const fetchCars = await axios.get(`http://localhost:8000/cars`);
    setCars(fetchCars.data);
  };

  // Load data from local storage when component mounts
  useEffect(() => {
    carDetails();
  }, [carDetails]);

  return (
    <>
      <h2>Car List</h2>
      <div className="d-flex justify-content-between">
        <NavLink to={"/cars/create"} className="btn btn-sm btn-primary">
          Add New Car
        </NavLink>
        <NavLink to={"/"} className="btn btn-sm btn-secondary">
          Dashboard
        </NavLink>
      </div>
      <br></br>
      <ul className="car-list">
        {cars.length > 0 ? (
          cars.map((car) => (
            <li key={car.id} className="car-item">
              {car.make} - {car.model} - {car.year}
              <button
                className="m-2 btn btn-sm btn-primary"
                onClick={() => deleteCar(car.id)}
              >
                Delete
              </button>
              <button
                className="btn btn-sm btn-primary"
                onClick={() => editCar(car.id)}
              >
                Edit
              </button>
            </li>
          ))
        ) : (
          <p>Sorry, there are no any car</p>
        )}
      </ul>
    </>
  );
};

export default Cars;
