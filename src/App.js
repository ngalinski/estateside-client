import './App.css';
import React, {Component} from "react";
import AppContainer from "./container/AppContainer";
import "bootstrap/dist/css/bootstrap.min.css"

class App extends Component {
    render() {
        return (
            <div className='App'>
                <AppContainer/>
            </div>
        )
    }
}

export default App;
