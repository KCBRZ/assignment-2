import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";

const MechanicEdit = () => {
  const navigate = useNavigate();
  const params = useParams();

  const id = String(params.id);

  const [mechanic, setMechanic] = useState({
    fullName: "",
    expertDomain: "",
    experience: "",
  });

  const fetchMechanicById = async () => {
    const mechanicData = await axios.get(
      `http://localhost:8000/mechanic/${id}`
    );
    setMechanic(mechanicData.data);
  };

  useEffect(() => {
    fetchMechanicById();
  }, []);

  // Function to handle changes in form inputs
  const handleInputChange = (e) => {
    setMechanic((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  // Function to add a new car
  const updateMechanic = async () => {
    await axios.put(`http://localhost:8000/mechanic/${id}`, mechanic);
    navigate("/mechanic");
  };

  return (
    <>
      <div className="mechanic-list-container">
        <h2>Update Mechanic</h2>
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
            onClick={updateMechanic}
          >
            Update Mechanic
          </button>
        </div>
        <br></br>
      </div>
    </>
  );
};

export default MechanicEdit;
