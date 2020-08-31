import React, {Component} from 'react';
import '../css/Factorial.css';
import axios from 'axios';

const FACTORIAL_URL = "http://localhost:8080/calculate/";

class Factorial extends Component {

    constructor() {
        super();
        this.state = {
            factorial: ""
        };
    }

    handleChange = (event) => {
        event.preventDefault();
        event.persist();
        this.setState(prev => {
            return ({factorial: event.target.value})
        });
    }

    handleClick = (event) => {
        event.preventDefault();
        event.persist();
        this.performFactorialRequest(this.state.factorial)
            .then(response => {
                console.log(response);
                document.getElementById("result").value = response.data;
            }).catch(err => {
            console.log(err);
        })
    }

    performFactorialRequest (num) {
        console.log(FACTORIAL_URL + num);
        return axios.get(FACTORIAL_URL + num);
    }

    render() {
        return (
            <div className="App">
                <h1>Factorial Calculator</h1>
                <div className="card">
                    <div className="card-body">
                        <form>
                            <label for="inputFactorial">Enter a positive integer</label>
                            <div className="input-group">
                                <input type="text" className="form-control" id="inputFactorial"
                                       value={this.state.factorial} aria-describedby="emailHelp"
                                       onChange={this.handleChange} />
                                <div className="input-group-prepend">
                                    <button type="button"
                                            className="btn btn-outline-primary" onClick={this.handleClick}>Submit</button>
                                </div>
                            </div>
                            <div className="input-group input-group-lg">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">Result</span>
                                </div>
                                <input type="text" id="result" className="form-control" aria-label="Sizing example input" aria-describedby="result" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Factorial;
