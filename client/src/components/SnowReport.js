import React, { useEffect, useState } from "react";
import { Segment, Input, Dropdown, Dimmer } from "semantic-ui-react";
import { FaSun, FaCloud, FaCloudSun, FaCloudRain, FaSnowflake, FaWind, FaColumns } from 'react-icons/fa';
import axios from "axios";

const SnowReport = () => {
  const [location, setLocation] = useState("");
  const [daysLimit, setDaysLimit] = useState(7); // Default limit is set to 7 days
  const [snowData, setSnowData] = useState(null);

  const handleSearch = () => {
    // Make API request to Snow API with the new location and days limit
    axios
      .get(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=F4QHX8D2ZCFH2D6ACBBWT4N6W&days=${daysLimit}`)
      .then((response) => {
        // Handle successful response
        console.log(response.data);
        setSnowData(response.data);
      })
      .catch((error) => {
        // Handle error
        console.error('Error fetching snow data:', error);
      });
  };

  useEffect(() => {
    // Load default snow data for initial render
    handleSearch();
  }, []);

  // Options for the days limit selector
  const daysLimitOptions = [
    { key: 1, text: "1 day", value: 1 },
    { key: 3, text: "3 days", value: 3 },
    { key: 7, text: "7 days", value: 7 },
    { key: 14, text: "14 days", value: 14 },
  ];

  return (
    <div>
      <Segment className="snow-conditions-segment" style={{borderRadius: '0px', background: 'rgb(34, 40, 49)', marginTop: '100px'}}>
        <div style={{display: "flex", flexDirection: 'column', alignItems: 'center'}}>
        <h2 style={{fontFamily: 'Anta', color: 'white', marginBottom: '0px'}}>Check</h2>
        <h2 style={{fontFamily: 'Anta', color: 'white', marginTop: '0px'}}>Snow Conditions</h2>
        <p style={{fontFamily: 'Anta', color: 'white', textAlign: 'center', marginBlock: '20px'}}>Search a location to see temeratures and conditions and use the wac key to wax accordingly</p>
        </div>
        <div style={{display: 'flex', justifyContent: 'center'}}>
        <Segment style={{width: '500px', textAlign: 'center'}}>
          <h2>Recommended Wax Key</h2>
          <h5 style={{background: 'rgb(251 238 71)'}}>Swix HS 10</h5>
          <h5 style={{background: 'rgb(228 70 59)'}}>Swix HS 8</h5>
          <h5 style={{background: 'rgb(186 110 158)'}}>Swix HS 7</h5>
          <h5 style={{background: 'rgb(111 172 206)'}}>Swix HS 6</h5>
          <h5 style={{background: 'rgb(117 173 115)'}}>Swix HS 5</h5>

        </Segment>
        </div>
        
    
        {/* Search bar */}
        <div style={{display: "flex", flexDirection: 'column', alignItems: 'center', marginTop: '20px'}}>
        <Input
          placeholder="Enter location..."
          value={location}
          style={{fontFamily: 'Anta'}}
          onChange={(e) => setLocation(e.target.value)}
          action={{
            icon: "search",
            onClick: handleSearch,
          }}
        />
        {/* Days limit selector */}
        <Dropdown
          placeholder="Select days limit"
          options={daysLimitOptions}
          value={daysLimit}
          onChange={(e, { value }) => setDaysLimit(value)}
          selection
          style={{fontFamily: 'Anta', marginTop: '10px'}}
        />
        </div>
       
        {snowData && snowData.days && (
          <div className="weather-cards-container" style={{ overflow: "auto", height: '250px', marginTop: '20px', scrollbarWidth: 'none', '-ms-overflow-style': 'none' }}>
            {snowData.days.slice(0, daysLimit).map((dayData, index) => {
              // Convert the timestamp to a Date object
              const timestamp = new Date(dayData.datetime);
              // Get the day of the week
              const dayOfWeek = `${timestamp.toLocaleDateString(undefined, { weekday: "long" })} ${timestamp.getDate()}/${timestamp.getMonth() + 1}`;



              let weatherIcon;
              switch (dayData.icon) {
                case 'clear-day':
                  weatherIcon = <FaSun style={{ fontSize: '5em' }} />;
                  break;
                case 'partly-cloudy-day':
                  weatherIcon = <FaCloudSun style={{ fontSize: '5em' }} />;
                  break;
                case 'cloudy':
                  weatherIcon = <FaCloud style={{ fontSize: '5em' }} />;
                  break;
                case 'rain':
                  weatherIcon = <FaCloudRain style={{ fontSize: '5em' }} />;
                  break;
                case 'snow':
                  weatherIcon = <FaSnowflake style={{ fontSize: '5em' }} />;
                  break;
                case 'windy':
                  weatherIcon = <FaWind style={{ fontSize: '5em' }} />;
                  break;
                default:
                  weatherIcon = null;
              }
              const getTemperatureColor = (temperature) => {
                if (temperature >= 35) {
                  return "rgb(251 238 71)"; // Red for high temperatures
                } else if (temperature >= 25) {
                  return "rgb(228 70 59)"; // Orange for warm temperatures
                } else if (temperature >= 18) {
                  return "rgb(186 110 158)"; // Orange for mild temperatures
                } else if (temperature >= 10) {
                  return "rgb(111 172 206)"; // Yellow for cool temperatures
                } else if (temperature >= 3) {
                  return "rgb(117 173 115)"; // Blue for cold temperatures
                } else {
                  return "rgb(117 173 115)"; // Light blue for very cold temperatures
                }
              };
              const temperatureColor = getTemperatureColor(dayData.temp || dayData.tempmax || dayData.tempmin);
              return (
                <div key={index} style={{display: 'flex', fontFamily: 'Anta', justifyContent: 'center'}}>
                  {/* Render snow condition data for each day */}
                  <Segment style={{borderRadius: '10px', bordertop: '20px', width: '325px', marginBottom: '20px', marginRight: '20px', display: 'flex', alignItems: 'center', justifyContent: 'space-around'}}>
                  <div>
                  <p>Location: {snowData.address}</p>
                  <p>{dayOfWeek}</p>
                  
                  {/* <p>Conditions: {dayData.conditions}</p> */}
                  
                  <p style={{ backgroundColor: temperatureColor }}>High: {dayData.tempmax} F</p>
                  <p style={{ backgroundColor: temperatureColor }}>Avg: {dayData.temp} F</p>
                  <p style={{ backgroundColor: temperatureColor }}>Low: {dayData.tempmin} F</p>
                  </div>
                  
                  <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                  {weatherIcon || dayData.icon}
                  </div>
                  
                  </Segment>
                  
                  
                </div>
              );
            })}
          </div>
        )}
      </Segment>
    </div>
  );
};

export default SnowReport;
