import React from "react";
import { Route, Routes } from "react-router-dom";
import FormPage from "../pages/formpage/formPage";
import SummaryPage from "../pages/summaryPage/summaryPage";
function RoutesGroup() {
  return (
    <Routes>
      <Route path="/" element={<FormPage />} />
      <Route path="/summary" element={<SummaryPage />} />
    </Routes>
  );
}

export default RoutesGroup;
