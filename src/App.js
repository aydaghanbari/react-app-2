import React from "react";
import './app.css';
import ReactDOM from 'react-dom';

class App extends React.Component {
    state= {
        numInput: "",
        powerResult: "",
        powBtn: false
    };
    handleInputChange = (event) => {
        let powBtn =this.state.powBtn; 
        this.setState ({numInput: event.target.value, powBtn: false});
    };
    handlePowerButton = () => { 
        this.setState({powBtn: true}); 
    }
    render() {
        let powerResult = this.state.powerResult;
            if (this.state.powBtn === true && this.state.numInput > 0 ){ 
                powerResult = this.state.numInput * this.state.numInput;
            } else if (this.state.powBtn === true && this.state.numInput <= 0 ){
              powerResult = (
                <span>Please enter a number greater than zero</span>
                );
            }
        return (
        <div>
            <label for="num">Enter a number:</label>
            <input type="number" id="num" value={this.state.numInput} onChange={this.handleInputChange}></input>
            <button onClick={this.handlePowerButton}>power of two</button>
           <p >{powerResult}</p> 
            
        </div>
        );
    }   
}
export default App;
