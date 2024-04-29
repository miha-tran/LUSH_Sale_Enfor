import { BrowserRouter, Route, Routes } from "react-router-dom";

import React from "react"
import UserPage from "./Pages/UserPage/UserPage"
import DataVisual from "./Pages/DataVisualization/DataVisualization"

function App(){

return (
<BrowserRouter>
<Routes>
  <Route path="/" element={<UserPage/>}  />
  <Route path="/visualization" element={<DataVisual/>}/>
</Routes>
</BrowserRouter>
)}

export default App