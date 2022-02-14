import React, { Component } from "react";
import axios from "axios";



export default class CombineApisButton extends Component {
    constructor() {
        super();
        this.state = {
            people: []
        }
    };

    handleButtonClick = async () => {
        let api1Response = [];
        let api2Response = [];
        
        //get data from api 1
        await axios.get("/api/api1").then((response) => {
            api1Response = response.data.person;
        })

        //get data from api 2
        await axios.get("/api/api2/combinedApis").then((response) => {
            api2Response = response.data.persons.person;
        })

        //join two api responses
        let joinedApis = api1Response.concat(api2Response);

        //sort based on id
        let sorted = joinedApis.sort(function(api1,api2) {
            return api1.id - api2.id
        })

        let jsonString = JSON.stringify(sorted,undefined, 1);
        
        this.setState({
            people: jsonString
        })
        
    }

    render() {
        const style = {
            'position': 'fixed',
            'top': '30%',
            'left': '70%',
            'transform': 'translate(-50%, -50%)'
          }

          return(
            <div style={style}>
                <button type="button" className="btn btn-primary" onClick={this.handleButtonClick}>Click to get combined sorted data </button>
                <div style={{'marginTop': '400px'}}>
                    <pre id="json">
                    {this.state.people}
                    </pre>
                </div>
            </div>
          )
    }
}