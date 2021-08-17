import React from 'react';

// const Landing = () => 
//     (
//         <div style={{textAlign: 'center'}}>

//             <h1>Welcome to foody website!</h1>
//         Feel free to browse over all of our list of foods with the help of our chatbot
//         </div>
    
//     )

// export default Landing;

class Landing extends React.Component {  
    render() {  
      const landingPage = {  
        color: "Black",  
        backgroundColor: "lightyellow",  
        padding: "20px",  
        fontFamily: "Arial"  
      };  
      return (  
        <div>  
            <div style={{ textAlign: 'center'}}>
                <h1 style={landingPage}>Welcome to foody website!</h1>
                </div>
                <img src="https://wallpaperaccess.com/full/767033.jpg" alt="testing" width="500" height="300"></img>
        <p>Feel free to browse over all of our list of foods with the help of our chatbot</p>  
        </div>  
      );  
    }  
  }  
  export default Landing;  