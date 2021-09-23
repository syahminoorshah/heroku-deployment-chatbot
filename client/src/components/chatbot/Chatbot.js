import React, { Component } from 'react';
import axios from "axios/index";
import { withRouter } from 'react-router-dom';
import { createChatBotMessage} from "react-chatbot-kit";

import Cookies from 'universal-cookie';
import { v4 as uuid } from 'uuid';

import Message from './Message';
import Card from './Card';
import QuickReplies from './QuickReplies';
import Options from '../Options/Options';


const cookies = new Cookies();


class Chatbot extends Component {
    messagesEnd;
    talkInput;

    constructor(props) {
        super(props);
        // This binding is necessary to make `this` work in the callback
        this._handleInputKeyPress = this._handleInputKeyPress.bind(this);
        this._handleQuickReplyPayload = this._handleQuickReplyPayload.bind(this);
        //this._handleClick = this._handleClick.bind(this);
        // this._handleButtonQuick = this._handleButtonQuick.bind(this);
        this.hide = this.hide.bind(this);
        this.show = this.show.bind(this);

        this.state = {
            messages: [],
            //click on chatbot = true(click)
            showBot: true,
            shopWelcomeSent: false
        };
        if (cookies.get('userID') === undefined) {
            cookies.set('userID', uuid(), { path: '/' });
        }
    }

    async df_text_query (queryText) {
        let says = {
            speaks: 'user',
            msg: {
                text : {
                    text: queryText
                }
            }
        }
        this.setState({ messages: [...this.state.messages, says]});
        const res = await axios.post('/api/df_text_query',  {text: queryText, userID: cookies.get('userID')});

        for (let msg of res.data.fulfillmentMessages) {
            says = {
                speaks: 'J&T',
                msg: msg
            }
            this.setState({ messages: [...this.state.messages, says]});
        }
    };


    async df_event_query(eventName) {

        const res = await axios.post('/api/df_event_query',  {event: eventName, userID: cookies.get('userID')});

        for (let msg of res.data.fulfillmentMessages) {
            let says = {
                speaks: 'J&T',
                msg: msg
            }

            this.setState({ messages: [...this.state.messages, says]});
        }
    };

    resolveAfterXSeconds(x) {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(x);
            }, x * 5000);
        })
    }

    async componentDidMount() {
        this.df_event_query('Welcome');
       
        
        

        // if (window.location.pathname === '/shop' && !this.state.shopWelcomeSent) {
        //     await this.resolveAfterXSeconds(1);
        //     this.df_event_query('WELCOME_SHOP');
        //     this.setState({ shopWelcomeSent: true, showBot: true });
        // }

        // this.props.history.listen(() => {
        //     if (this.props.history.location.pathname === '/shop' && !this.state.shopWelcomeSent) {
        //         this.df_event_query('WELCOME_SHOP');
        //         this.setState({ shopWelcomeSent: true, showBot: true });
        //     }
        // });
    }

    componentDidUpdate() {
        this.messagesEnd.scrollIntoView({ behavior: "smooth" });
        if ( this.talkInput ) {
            this.talkInput.focus();
        }
    }

    show(event) {
        event.preventDefault();
        event.stopPropagation();
        this.setState({showBot: true});
    }

    hide(event) {
        event.preventDefault();
        event.stopPropagation();
        this.setState({showBot: false});
    }

    _handleQuickReplyPayload(event, payload, text) {
        event.preventDefault();
        event.stopPropagation();

        switch (payload) {
            case 'recommended_yes':
                this.df_event_query('SHOW_RECOMMENDATIONS');
                break;
            case 'training_masterclass':
                this.df_event_query('MASTERCLASS');
                break;
            default:
                this.df_text_query(text);
                break;
        }
    }

    // _handleButtonQuick(payload) {
    //     // event.preventDefault();
    //     // event.stopPropagation();

    //     switch (payload) {
    //         case 'track-number':
    //         this.df_event_query('TRACK');
    //         break;
    //     default:
    //         this.df_text_query();
    //         break;
    //     }
    // }


    renderCards(cards) {
        return cards.map((card, i) => <Card key={i} payload={card.structValue}/>);
    }


    renderOneMessage(message, i) {

        if (message.msg && message.msg.text && message.msg.text.text) {
            return <Message key={i} speaks={message.speaks} text={message.msg.text.text}/>;
        } else if (message.msg && message.msg.payload.fields.cards) { //message.msg.payload.fields.cards.listValue.values

            return <div key={i}>
                <div className="card-panel grey lighten-5 z-depth-1">
                    <div style={{overflow: 'hidden'}}>
                        <div className="col s2">
                            <a href="/" className="btn-floating btn-large waves-effect waves-light grey">{message.speaks}</a>
                        </div>
                        <div style={{ overflow: 'auto', overflowY: 'scroll'}}>
                            <div style={{ height: 300, width:message.msg.payload.fields.cards.listValue.values.length * 270}}>
                                {this.renderCards(message.msg.payload.fields.cards.listValue.values)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        } else if (message.msg &&
            message.msg.payload &&
            message.msg.payload.fields &&
            message.msg.payload.fields.quick_replies
        ) {
            return <QuickReplies
                text={message.msg.payload.fields.text ? message.msg.payload.fields.text : null}
                key={i}
                replyClick={this._handleQuickReplyPayload}
                speaks={message.speaks}
                payload={message.msg.payload.fields.quick_replies.listValue.values}/>;
        }
    }

    renderMessages(returnedMessages) {
        if (returnedMessages) {
            return returnedMessages.map((message, i) => {
                return this.renderOneMessage(message, i);
                //return this.renderTwoMessage(message, i);
                }
            )
        } else {
            return null;
        }
    }


    //Press Enter to send message to chatbot from user
    _handleInputKeyPress(e) {
        if (e.key === 'Enter') {
            this.df_text_query(e.target.value);
            e.target.value = '';
        }
    }


    
    
    render() {
        //Chatbot Outer Layout
        if (this.state.showBot) {
            return (
                
                <div style={{ 
                    // minHeight: 100, 
                    // maxHeight: 500,
                    height: 690, 
                    width:430, 
                    position: 'absolute', 
                    bottom: 0, 
                    right: 10, 
                    border: '6px solid black',
                    borderRadius: '15px'}} >
                    <div style = {{ backgroundColor: 'CadetBlue',  borderRadius: '3px', paddingTop: '5px' }}>
                        <div>
                                    <img src = "https://img.icons8.com/ios-glyphs/2x/customer-support.png"></img>
                                    <span style = {{position: 'absolute', bottom: 640, left: 80, display: 'block', fontSize: '18px', color: 'white', fontWeight: 'bold'}} >J&T Online Assistant</span>
                                    <span style = {{position: 'absolute', bottom: 621, left: 80}} >Agent</span>
                                    <a href="/" ><img src = "https://img.icons8.com/material-two-tone/2x/loading.png" style = {{position: 'absolute', right: 43}}></img></a>
                                    <a href="/"  onClick={this.hide}><img src = "https://img.icons8.com/material-outlined/2x/multiply.png" style = {{position: 'absolute', right: 0}} ></img></a>
                                    <a href="https://www.wipdata.com/" style = {{position: 'absolute', bottom: 608, left: 345, fontSize: '6px', color: 'whitesmoke',  fontWeight: 'bold'}}>POWERED BY WIPDATA</a>
                        </div>                            
                    </div>   
                    
        {/* //Chatbot Inner Layout */}

                    <div id="chatbot"  style={{ 
                        // minHeight: 300, 
                        // maxHeight: 388,
                        height: 560,
                        width:'100%', 
                        overflow: 'auto',
                        backgroundColor: 'PapayaWhip'}}>
                    
                         {this.renderMessages(this.state.messages)} 
                       
                        <div ref={(el) => { this.messagesEnd = el; }}
                             style={{ float:"right"}}>
                                 {/* , clear: "both"  */}
                        </div>
                    </div>
                

                    {/* Chatbot User Response */}
                    {/* className=" col s12" style={{}} class="blue accent-1" class='black-text' */}
                    <div  >
                        
                        <input class='black-text' style={{margin: 0, paddingLeft: '1%', paddingRight: '1%', width: '98%', backgroundColor: 'whitesmoke'}} ref={(input) => { this.talkInput = input; }} placeholder="type a message:"  onKeyPress={this._handleInputKeyPress} id="user_says" type="text" />
                    </div>

                </div>
            );
        } else {
            return (
                // Hide Chatbot
                //style={{ minHeight: 20, maxHeight: 100, width:250, position: 'absolute', bottom: 0, right: 0, border: '1px solid lightgray'}}
                <div  >
                    
                        <div style = {{ position: 'absolute', bottom: 0, right: 15}}>
                            {/* <a href="/" >J&T Bot</a> */}
                            {/* <ul  className="right hide-on-med-and-down" > */}
                                <a href="/" onClick={this.show}> <img src = "https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/2x/external-customer-support-female-profession-vitaliy-gorbachev-lineal-color-vitaly-gorbachev.png" ></img></a>
                            {/* </ul> */}
                        </div>
                    
                    <div ref={(el) => { this.messagesEnd = el; }}
                         style={{ float:"left", clear: "both" }}>
                    </div>
                </div>
            );
        }
    }
}

//export default Chatbot;
export default withRouter(Chatbot);