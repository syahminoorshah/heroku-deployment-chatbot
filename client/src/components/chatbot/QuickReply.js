import React from 'react';


const QuickReply = (props) => {
    if (props.reply.structValue.fields.payload) {
        return (
            //className="waves-effect waves-light btn grey"
            <a style={{ margin: 1, backgroundColor: 'black',fontSize: '7px', paddingLeft: '10px'}} href="/" className="waves-effect waves-light btn flat"
               onClick={(event) =>
                   props.click(
                       event,
                       props.reply.structValue.fields.payload.stringValue,
                       props.reply.structValue.fields.text.stringValue
                   )
               }>
                {props.reply.structValue.fields.text.stringValue}
            </a>
        );
    } else {
        return (
            <a style={{ margin: 3, backgroundColor: 'black',fontSize: '7px', paddingLeft: '10px',paddingTop: '6px', fontWeight: 'bold'}} href={props.reply.structValue.fields.link.stringValue}
               className="btn-floating btn-large waves-effect waves-light red">
                {props.reply.structValue.fields.text.stringValue}
            </a>
        );
    }

};

export default QuickReply;