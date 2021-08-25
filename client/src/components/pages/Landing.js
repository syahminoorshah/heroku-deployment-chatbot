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
        // <div>  
        //     <div style={{ textAlign: 'center'}}>
              
        //         <div style={landingPage}>J&T Express</div>
        //         </div>
                
        <p>#1 Parcel Delivery Service in Malaysia | J&T Express Malaysia </p>  
        
        //</div>  
      );  
    }  
  }  
  export default Landing;  