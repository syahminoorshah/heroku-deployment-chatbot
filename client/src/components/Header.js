import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => (
  <nav>
      <div className="nav-wrapper">
          <Link to={'/'} className="brand-logo">J&T Express</Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><Link to={'/shop'}>Shop</Link></li>
              <li><Link to={'/about'}>About us</Link></li>
          </ul>
      </div>
  </nav>
)

export default Header;
// const Header = () => 
//     (
//         <nav>
//             <ul>
//             <li><Link to={'/shop'}>Shop</Link></li>
//             <li><Link to={'/about'}>About us</Link></li>
//         </ul>
//         </nav>
//     )

// export default Header;

// class Header extends React.Component {  
//     render() {  
//       const headerHome = {  
//         color: "Black",  
//         backgroundColor: "lightblue",  
//         //background-color: ;
//         padding: "15px",  
//         fontFamily: "Arial"  
//       };  
//       return (  
        
//         <nav>
//             <div style={headerHome}>
                
//                 <li><Link to={'/shop'}>Shop</Link></li>
//                 <li><Link to={'/about'}>About us</Link></li>
                
//             </div>
//         </nav>
//       );  
//     }  
//   }  
//   export default Header;  