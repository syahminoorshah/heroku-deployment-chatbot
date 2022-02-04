import React, { Component } from 'react';
import QuickReply from './QuickReply';

class QuickReplies extends Component {
    constructor(props) {
        super(props);
        this._handleClick = this._handleClick.bind(this);
    }

    _handleClick(event, payload, text) {
        this.props.replyClick(event, payload, text);
    }

    renderQuickReply(reply, i) {
        return <QuickReply key={i} click={this._handleClick} reply={reply} />;
    }

    renderQuickReply(reply, i) {
        return <QuickReply key={i} click={this._handleClick} reply={reply} />;
    }

    renderQuickReplies(quickReplies) {
        if (quickReplies) {
            return quickReplies.map((reply, i) => {
                    return this.renderQuickReply(reply, i);
                }
            )
        } else {
            return null;
        }
    }
    //Lavender

    //className="col s12 m8 offset-m2 l6 offset-l3"
    //className="card-panel grey lighten-5 z-depth-1"
    render() {
        return (
            <div >
                <div >
                    <div  style = {{backgroundColor: 'white'}}>
                    {/* className="col s2" */}
                    {/* className="col s10" */}
                        <div >
                            <a href="/" >{this.props.speaks}</a>
                        </div>
                        <div id="quick-replies" style = {{fontSize: '9px', paddingTop: '6px'}}>
                            {this.props.text && <p>
                                {this.props.text.stringValue}
                            </p>
                            }
                            {this.renderQuickReplies(this.props.payload)}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default QuickReplies;