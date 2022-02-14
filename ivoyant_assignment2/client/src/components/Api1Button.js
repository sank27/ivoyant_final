import React, { Component } from "react";
import axios from "axios";


export default class Api1Button extends Component {
    constructor() {
        super();
        this.state = {
            people: ""
        }
    };

    //will delay for 5 seconds
    delayResponse = () => {
        setTimeout(this.handleButtonClick, 5000);
    }

     handleButtonClick = () => {
        axios.get("/api/api1").then((response) => {
            let jsonString = JSON.stringify(response.data.person, undefined, 2);
            this.setState({
                people: jsonString
            })
        })
     }

    render() {
        const style = {
            'position': 'fixed',
            'top': '14%',
            'left': '30%',
            'transform': 'translate(-50%, -50%)'
          }
        
        return (
            <div style={style}>
                <button type="button" className="btn btn-primary" onClick={this.delayResponse}>Click to get json response from API 1</button>
                <div style={{'marginTop': '40px'}}>
                    <pre id="json">
                        {this.state.people}
                    </pre>
                    
                </div>
            </div>

        )
    }
}