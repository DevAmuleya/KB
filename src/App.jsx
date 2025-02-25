import './App.css';
import { useState } from 'react';
import Home2 from './component/Home2';
import Signin from './component/Signin';
import Home from './component/Home';
import Bulkupdate from './component/Bulkupdate';
import Quickupdate from './component/Quickupdate';
import { Route, Routes } from "react-router-dom";

function App() {
  const [showPricingRule, setShowPricingRule] = useState(false);
  const [value, setValue] = useState(10);
  const [isClicked, setIsClicked] = useState("start-btn");  // Default "start-btn" as clicked

  // Function to toggle visibility of the pricing rule
  const togglePricingRule = () => {
    setShowPricingRule((prev) => !prev);
  };

  // Function to handle range input change
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  // Function to handle button click and toggle isClicked state
  const handleButtonClick = (buttonId) => {
    setIsClicked(buttonId);  // Set the clicked button's ID
    togglePricingRule();  // Toggle pricing rule visibility
  };

  return (
    <> 
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/home" element={<Home />} />
          <Route 
            path="/bulkupdate" 
            element={
              <Bulkupdate
              showPricingRule={showPricingRule} 
              handleButtonClick={handleButtonClick} 
              togglePricingRule={togglePricingRule} 
              value={value} 
              isClicked={isClicked} 
              handleChange={handleChange}
               />} 
          />
          <Route path="/quickupdate" element={<Quickupdate />} />
          <Route 
            path="/home2" 
            element={
              <Home2
              showPricingRule={showPricingRule} 
              value={value} 
              handleChange={handleChange}
               />} 
          />
        </Routes>
     
    </>
  );
}

export default App;
