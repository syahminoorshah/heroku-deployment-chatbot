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
        // className="btn-floating btn-large waves-effect waves-light red"
        //className="btn-floating btn-large waves-effect waves-light blue"
        ////style = {{margin: '5px', padding: '10px', border: '3px solid black'}}
        //
        <div style = {{border: '1px solid',backgroundColor: '#f1f1f1', borderRadius: '6px', padding: '1px', margin: '5px 0'}} >
            <div style = {{backgroundColor: '#f1f1f1',  fontSize: '12px', paddingTop: '6px',  paddingLeft: '10px'}}>
                <div  className="row valign-wrapper">
                    {props.speaks==='J&T' &&
                    <div >
                        <a href="/" className="btn-floating btn-large waves-effect waves-light red" >{props.speaks}</a>
                    </div>
                    
                    }
                    <div >
                      <span className="black-text">
                        {props.text}
                      </span>
                    </div >
                    {props.speaks==='user' &&
                    <div className="col s2" >
                        <a href="/" className="btn-floating btn-large waves-effect waves-light red" >{props.speaks}</a>
                    </div>
                    }
                    
                </div>
            </div>
        </div>
        

    );
};

export default Message;