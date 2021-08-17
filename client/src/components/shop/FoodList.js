


// const FoodList = () => 

//     (
//         <div className="Food-List" style= {{color:red}}>
//             These all our the varieties of our list of food that we have 
//         </div>
//     )

// export default FoodList;

import React from 'react';  
import ReactDOM from 'react-dom';  
  
class FoodList extends React.Component {  
  render() {  
    const descFoodList = {  
      color: "Black",  
      backgroundColor: "lightyellow",  
      padding: "10px",  
      fontFamily: "Arial"  
    };  
    return (  
      <div>  
      <h1 style={descFoodList}>Craving for something?</h1>  
      <p>These all our the varieties of our list of food that we have.</p>  
      </div>  
    );  
  }  
}  
export default FoodList;  