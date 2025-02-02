import { useState } from "react";

/*
  Components
*/
import Nav from "./components/common/Nav";
import Footer from "./components/common/Footer";
import Home from "./components/home/Home";
import StaffList from "./components/staff/StaffList";
import PetsList from "./components/pets/PetsList";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

/*
  Data
  ---------------
  Note: Normally this data would be pulled from an API. It is not necessary, however, for this application.
*/
import { employeeData } from "./data/employees.js";
import { ownerData } from "./data/owners";
import { petData } from "./data/pets";
import PageNotFound from "./components/common/PageNotFound";

function App() {
  const [employees] = useState(employeeData);
  const [owners] = useState(ownerData);
  const [pets] = useState(petData);
  const cats = pets.filter((pet) => {
    return pet.kind==="Cat"})
  const dogs = pets.filter((pet) => {
    return pet.kind==="Dog"})

  return (
    <div className="wrapper">
      <Router>
      <Nav />
        <Routes>
        <Route path= "/" element = {<Home employees={employees} owners={owners} pets={pets} />}/>
        <Route path= "/staff" element = {<StaffList employees={employees} />}/>
        <Route path= "/pets" 
          element = {<PetsList pets={pets} type={"pets"}/>}/>
        <Route path= "/pets/cats" 
          element = {<PetsList pets={cats} type={"cats"}/>}/>
        <Route path= "/pets/dogs" 
          element = {<PetsList pets={dogs} type={"dogs"}/>}/>
       
          {/* <PageNotFound employees={employees} />
          <PetsList pets={pets} /> */}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
