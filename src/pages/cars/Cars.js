import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Cars = () => {
  // Initialize state variables to hold car details
  const [cars, setCars] = useState([]);

  // Function to delete a car
  const deleteCar = (carId) => {
    // Update state
    setCars(cars.filter((car) => car.id !== carId));
    // Update local storage
    localStorage.setItem(
      "cars",
      JSON.stringify(cars.filter((car) => car.id !== carId))
    );
  };

  // Function to edit a car
  const editCar = (carId, updatedCar) => {
    // Update state
    setCars(cars.map((car) => (car.id === carId ? updatedCar : car)));
    // Update local storage
    localStorage.setItem(
      "cars",
      JSON.stringify(cars.map((car) => (car.id === carId ? updatedCar : car)))
    );
  };

  // Load data from local storage when component mounts
  useEffect(() => {
    const storedCars = localStorage.getItem("cars");
    if (storedCars) {
      setCars(JSON.parse(storedCars));
    }
  }, []);

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
                onClick={() =>
                  editCar(car.id, { ...car, make: "Updated Make" })
                }
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
