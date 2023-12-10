// client/src/App.js
import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Navigation from "./Components/Navigation/Navigation";
import ExpensePage from "./Pages/ExpensePage";
import AnalysisPage from "./Pages/AnalysisPage";

const App = () => {
  return (
    <div className=" text-slate-800 font-poppins">
      <Navigation />
      <div className=" p-3">
        <div className=" max-w-2xl mx-auto ">
          <Routes>
            <Route path="/" element={<Navigate to={"/expense-page"} />}></Route>
            <Route path="/expense-page" element={<ExpensePage />}></Route>
            <Route path="/analysis-page" element={<AnalysisPage />}></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
