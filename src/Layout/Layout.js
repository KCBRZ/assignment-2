import { Route, Routes } from "react-router-dom";
import Cars from "../pages/cars/Cars";
import Mechanic from "../pages/mechanic/Mechanic";
import CarCreate from "../pages/cars/CarCreate";
import CarEdit from "../pages/cars/CarEdit";
import MechanicEdit from "../pages/mechanic/MechanicEdit";
import MechanicCreate from "../pages/mechanic/MechanicCreate";
import Dashboard from "../pages/Dashboard/Dashboard";

const Layout = () => {
  return (
    <>
      <div className="container">
        <main role="main" className="container">
          <Routes>
            <Route
              exact
              path="/"
              name="Dashboard Page"
              element={<Dashboard />}
            />
            <Route exact path="/cars" name="cars Page" element={<Cars />} />
            <Route
              exact
              path="/cars/create"
              name="Add New Car"
              element={<CarCreate />}
            />
            <Route
              exact
              path="/cars/:id"
              name="Edit Car"
              element={<CarEdit />}
            />
            <Route
              exact
              path="/mechanic"
              name="Mechanic Page"
              element={<Mechanic />}
            />
            <Route
              exact
              path="/mechanic/create"
              name="Add New mechanic"
              element={<MechanicCreate />}
            />
            <Route
              exact
              path="/mechanic/:id"
              name="Edit Mechanic"
              element={<MechanicEdit />}
            />
          </Routes>
        </main>
      </div>
    </>
  );
};
export default Layout;
