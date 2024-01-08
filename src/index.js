import React from "react";
import ReactDOM from "react-dom/client";
import { Routes } from "react-router-dom";

import AppSectionCsr from "./components/sanho/AppSectionCsr";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Routes>
    <AppSectionCsr />
  </Routes>
);
