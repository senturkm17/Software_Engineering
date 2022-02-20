import React, { Component } from 'react';
import './icons.css';




class Tokens extends Component {
    static defaultProps = {
        background: "#56CCF2"
    }
    render() {
        const {background} = this.props;
        return (
            <div className="tokens" style = {{"background": background}}>
            </div>
        );
    }
}

export default Tokens;
