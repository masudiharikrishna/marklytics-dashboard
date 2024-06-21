import { Component } from "react";
import "./index.css"
import { BallTriangle } from 'react-loader-spinner'
import 'bootstrap/dist/css/bootstrap.min.css';

class Dashboard extends Component {
  state = {
    location: "",
    data: "",
    msg: "",
    isLoading: false
  };

  fetchData = async () => {
    this.setState({isLoading:true,data:"",msg:""})
    try {
      const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=0074c8d95d334a64942134433242106&q=${this.state.location}`);
      if (response.ok) {
        const fetchedData = await response.json();
        this.setState({ data: fetchedData });
        console.log(fetchedData);
      } else {
        this.setState({ msg: "Location not found" });
      }
    } catch (error) {
      console.error(error);
      this.setState({ msg: "Error fetching data" });
    }
    this.setState({isLoading:false})
  };

  render() {
    const { location, data, msg, isLoading} = this.state;
    return (
      <div className="weather-dashboard">
        <h1 className="main-heading"><span>W</span>eather <span>D</span>ashboard</h1>
        <p className="main-paragraph">
          Stay ahead of the storm with our <span>real-time</span> weather dashboard, featuring instant updates, <br />detailed forecasts, and interactive maps to keep you informed and prepared.
        </p>
        <div className="input-container">
          <input type="text" placeholder="Enter Location Name" value={location} onChange={(event) => this.setState({ location: event.target.value })} />
          <button className="btn btn-primary" onClick={this.fetchData}>Search</button>
        </div>
        <div>
            {msg ? <p className="error-message">{msg}</p>: ""}
        </div>
        <div className="content">
            {isLoading ? (<BallTriangle
                            height={100}
                            width={100}
                            radius={5}
                            color="#FFFFFF"
                            ariaLabel="ball-triangle-loading"
                            wrapperStyle={{}}
                            wrapperClass=""
                            visible={true}
                            />)
            :
            (
                <div>
                {data && (
                    <div className="weather-data">
                        <ul className="list-container">
                            <li>Location: {data.location.name}</li>
                            <li>Region: {data.location.region}</li>
                            <li>Country: {data.location.country}</li>
                            <li>Present Time: {data.location.localtime}</li>
                        </ul>
                        <ul className="list-container">
                            <li>Temperature: {data.current.temp_c}°C</li>
                            <li>Condition: {data.current.condition.text}</li>
                            <li>Real feel: {data.current.feelslike_c}°</li>
                            <li>Humidity: {data.current.humidity}%</li>
                            <li>Last Updated: {data.current.last_updated}</li>
                            <li>Pressure: {data.current.pressure_mb}mbar</li>
                        </ul>
                    </div>
                    )}
                </div>
            )}
        </div>
      </div>
    );
  }
}

export default Dashboard;