import React, { Component } from 'react';
import './App.css';

class App extends Component {
    state = {
        temp: '',
        humd: '',
        image:'',
        loc:''
    }
    handleClick = async (e) => {
        e.preventDefault();
//        console.log(e.target.elements.city.value)
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&apikey=dbd802d470137cd4c005f9625b564ea2`);
        const data = await api_call.json();
        console.log(data)
        this.setState({
            temp: data.main.temp,
            humd: data.main.humidity,
            image: data.weather[0].icon,
            loc: data.name
        })
        
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
                {this.state.loc!==''?<h1>City:{this.state.loc}</h1>:''}
                {this.state.image!==''?<img src ={this.state.image} width = "100px" height = "100px" alt = "weather icon"></img>:''}
                {this.state.temp!==''?<h1>Humdity:{this.state.temp}</h1>:''}
                {this.state.humd!==''?<h1>Temp:{this.state.humd}</h1>:''}

            </div>
        </center>
      </div>
    );
  }
}

export default App;