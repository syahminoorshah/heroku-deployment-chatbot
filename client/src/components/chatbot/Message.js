import React from 'react';

// const landingPage = {  
//     color: "Black",  
//     backgroundColor: "lightyellow",  
//     padding: "20px",  
//     fontFamily: "Arial"  
//   };  

//className="col s2"
//className="col s10"
//className="col s10"
const Message = (props) => {
    return (
        
        <div  >
            <div style = {{backgroundColor: 'Lavender',  fontSize: '18px'}}>
                <div className="row valign-wrapper">
                    {props.speaks==='J&T' &&
                    <div >
                        <a href="/" className="btn-floating btn-large waves-effect waves-light red">{props.speaks}</a>
                    </div>
                    
                    }
                    <div style = {{margin: '5px', paddingTop: '10px'}} >
                      <span className="black-text">
                        {props.text}
                      </span>
                    </div >
                    {props.speaks==='user' &&
                    <div className="col s2">
                        <a href="/" className="btn-floating btn-large waves-effect waves-light blue">{props.speaks}</a>
                    </div>
                    }
                    
                </div>
            </div>
        </div>
        

    );
};

export default Message;