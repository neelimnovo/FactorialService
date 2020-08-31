import React, { Component } from "react";
import ReactDOM from 'react-dom';
import Factorial from "./Factorial";
import '../css/Factorial.css';

class Main extends Component {
    render() {
        return (
            <div>
                <Factorial />
            </div>
        );
    }
}

ReactDOM.render(
    <Main />,
    document.getElementById('react-mountpoint')
);