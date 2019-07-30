import React,{Component} from 'react';
import {connect} from "react-redux";


class Message extends Component{



    render() {
        return(
            <div>
                sdf
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {messages: this.messages}
}