import React from 'react';
import styles from './PopUp.css'
import autobind from "auto-bind"

export default class PopUp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            text: this.props.text || "default value",
        }

        autobind(this)
    }
    
    render() {
        return (
            <span className="popUp">
                {this.state.text}
            </span>     
        );
    }
}