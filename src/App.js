import React, { Component } from 'react';
import './App.css';

class App extends Component {
    state = {
        temp: '',
        humd: '',
        image:''
    }
    handleClick = async (e) => {
        e.preventDefault();
//        const city = e.target.elements.city.value;
//        const country = e.target.elements.country.value;
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=London&units=metric&apikey=dbd802d470137cd4c005f9625b564ea2`);
        console.log(api_call)
        const data = await api_call.json();
        console.log(data)
        
      }
  render() {
      
    return (
      <div className="container">
        <center>
            <div className ="card" id="card1">
                <h1>Weather</h1>
                <form onSubmit = {this.handleClick} >
                    <input type="text" placeholder="city" name ="city" className = "form-control"/> <br></br>
                    <input type="text" placeholder="country" name ="country" className = "form-control"/><br></br>
                    <button className = "btn btn-info" > Get Weather </button>
                </form>
            </div>
        </center>
      </div>
    );
  }
}

export default App;