import React from "react";
import "./App.css"; // Import CSS file for global styles
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="*" name="Layout Page" element={<Layout />} />
      </Routes>
    </BrowserRouter>
  );
};
// function App() {
//   return (
//     <div className="container mt-5">
//       {" "}
//       {/* Apply Bootstrap container class */}
//       <h1 className="text-center mb-4">
//         Biraj Naresh Shreejan Rahul Car Garage
//       </h1>
//       <div className="row">
//         <div className="col">
//           {/* Render the CarList component */}
//           <CarList />
//         </div>
//         <div className="col">
//           {/* Render the MechanicList component */}
//           <MechanicList />
//         </div>
//       </div>
//     </div>
//   );
// }

export default App;
