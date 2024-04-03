import React, { useState, useEffect } from "react";
import "./CarList.css"; // Import CSS file for component styling

const CarList = () => {
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
  };

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
    <div className="car-list-container">
      {/* Form for adding a new car */}
      <h2>Add New Car</h2>
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
      {/* Apply container class */}
      <h2>Car List</h2>
      {/* Render the list of cars */}
      <ul className="car-list">
        {cars.map((car) => (
          <li key={car.id} className="car-item">
            {/* Apply item class */}
            {car.make} - {car.model} - {car.year}
            {/* Add buttons for editing and deleting cars */}
            <button
              className="m-2 btn btn-sm btn-primary"
              onClick={() => deleteCar(car.id)}
            >
              Delete
            </button>
            <button
              className="btn btn-sm btn-primary"
              onClick={() => editCar(car.id, { ...car, make: "Updated Make" })}
            >
              Edit
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CarList;
