import { NavLink } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <section className="jumbotron text-center">
        <div className="container">
          <h1 className="jumbotron-heading">
            Biraj Naresh Shreejan Rahul Car Garage
          </h1>
          <p>
            <NavLink
              to={"/cars"}
              className="btn btn-primary my-2"
              style={{ marginRight: "10px" }}
            >
              Car Lists
            </NavLink>
            <NavLink to={"/mechanic"} className="btn btn-secondary my-2">
              Mechanic Lists
            </NavLink>
          </p>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
