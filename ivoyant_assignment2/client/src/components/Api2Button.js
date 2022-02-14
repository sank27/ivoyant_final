import React, { Component } from "react";
import axios from "axios";




export default class Api2 extends Component {
    constructor() {
        super();
        this.state = {
            people: ""
        }
    };

    //will delay for 10 seconds
    delayResponse = () => {
        setTimeout(this.handleButtonClick, 10000);
    }

    handleButtonClick = () => {
        axios.get("/api/api2").then((response) => {
            this.setState({
                people: response.data
            })
        })
    }

    render() {

        const style = {
            'position': 'fixed',
            'top': '14%',
            'left': '50%',
            'transform': 'translate(-50%, -50%)'
          }

        return (
            <div style={style}>
                <button type="button" className="btn btn-primary" onClick={this.delayResponse}>Click to get xml response from API 2</button>
                <div style={{'marginTop': '40px'}}>
                    <pre id="xml">
                    {this.state.people}
                    </pre>
                    
                </div>
            </div>
        )
    }
}