import { NavLink } from "react-router-dom";
import "./DataVisualization.scss";
import React from 'react';
// import chemicalsGraph from '../../assets/chemicals_graph.png';
// import top3Chemicals from '../../assets/top_3_chemicals.png';
// import packagingWaste from '../../assets/packaging_waste.png';
// import numberOfChemicals from '../../assets/number_of_chemicals.png';
function DataVisual (){
    return (
        <>

      <header className="header">
        
        <h1 className="header__logo">
        <NavLink className="header__link header__logo" to="/">
          Lush
        </NavLink>
        </h1>
      
                      
       <h3> <NavLink to='/visualization' className="header__link  header__visualpageLink"> Some Insights ... </NavLink> </h3> 
            
      </header>
   
           
      <div className="data-visualization">
      <h1>Environmental Impact Statistics</h1>
      {/* <div className="images-grid">
        <img src={chemicalsGraph} alt="Chemicals Graph" />
        <img src={top3Chemicals} alt="Top 3 Chemicals" />
        <img src={packagingWaste} alt="Packaging Waste" />
        <img src={numberOfChemicals} alt="Number of Chemicals" />
      </div> */}
    </div>
        
        
        </>
           

    )
}



export default DataVisual;