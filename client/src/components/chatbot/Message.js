import React from 'react';

// const landingPage = {  
//     color: "Black",  
//     backgroundColor: "lightyellow",  
//     padding: "20px",  
//     fontFamily: "Arial"  
//   };  



const Message = (props) => {
    return (
        
        <div className="col s12 m8 offset-m2 l6 offset-l3">
            <div className="red lighten-5">
                <div className="row valign-wrapper">
                    {props.speaks==='J&T' &&
                    <div className="col s2">
                        <a href="/" className="btn-floating btn-large waves-effect waves-light blue">{props.speaks}</a>
                    </div>
                    }
                    <div className="col s10">
                      <span className="black-text">
                        {props.text}
                      </span>
                    </div>
                    {props.speaks==='user' &&
                    <div className="col s2">
                        <a href="/" className="btn-floating btn-large waves-effect waves-light maroon">{props.speaks}</a>
                    </div>
                    }
                </div>
            </div>
        </div>
        

    );
};

export default Message;