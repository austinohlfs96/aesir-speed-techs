import React, { useEffect, useState } from "react";
import { Segment, Input, Dropdown, Dimmer } from "semantic-ui-react";
import { FaSun, FaCloud, FaCloudSun, FaCloudRain, FaSnowflake, FaWind, FaColumns } from 'react-icons/fa';
import axios from "axios";
import MapContainer from "./MapContainer";
import WeatherCard from "./WeatherCard";
import { Bar } from 'react-chartjs-2';
import { Chart, BarController, CategoryScale, LinearScale } from 'chart.js/auto'; // Import necessary Chart.js components

Chart.register(BarController, CategoryScale, LinearScale); // Register required components

// Your component code...



const SnowReport = () => {
  const [location, setLocation] = useState("");
  const [daysLimit, setDaysLimit] = useState(1); // Default limit is set to 7 days
  const [snowData, setSnowData] = useState(null);
  const [dayData, setDayData] = useState(null);
  const [clickedLocation, setClickedLocation] = useState(null);
  const [locationName, setLocationName] = useState('');
  const [temperatureDifferenceData, setTemperatureDifferenceData] = useState(null);
  const [showHourlyTemperature, setShowHourlyTemperature] = useState(false); // State to control the visibility of hourly temperature chart

  const handleExpandClick = () => {
    // Check if snowData is defined and has days property
    if (snowData && snowData.days) {
      // Assuming you want to get temperatures for the second day (index 1)
      const temperaturesForOneDay = snowData.days[1].hours.map(hour => hour.temp);
      console.log(temperaturesForOneDay);
  
      // Update state if necessary
      setDayData(temperaturesForOneDay);
    }
    console.log(dayData)
    setShowHourlyTemperature(!showHourlyTemperature); // Toggle the visibility state
  };

  const handleLocationClick = (data) => {
    setClickedLocation(data);
    // const component1 = data.address_components[1];
    // const component3 = data.address_components[3];
    // // Set the location name based on the extracted components
    // setLocationName(`${component1.long_name}, ${component3.long_name}`);
    handleSearch()
    console.log( "testClickedLocation", clickedLocation)
  };
  
  // const locationString1 = clickedLocation ? `${clickedLocation.lat},${clickedLocation.lng}` : 'default value';

  const handleSearch = () => {
    // Check if clickedLocation is defined
    if (clickedLocation) {
      console.log('clickedLocation', clickedLocation)
      // Make API request to Snow API with the new location and days limit
      axios
        .get(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${clickedLocation}?key=F4QHX8D2ZCFH2D6ACBBWT4N6W&days=${daysLimit}`)
        .then((response) => {
          // Handle successful response
          console.log("test2", clickedLocation);
          console.log('resObj', response.data);
          setSnowData(response.data);
        })
        .catch((error) => {
          // Handle error
          console.error('Error fetching snow data:', error);
        });
    }
  };

  const calculateTemperatureDifferences = () => {
    if (snowData && snowData.days) {
      const labels = [];
      const temperatureDifferences = [];

      snowData.days.slice(0, daysLimit).forEach(dayData => {
        labels.push(dayData.datetime);
        const difference = (dayData.tempmax || dayData.temp) - (dayData.tempmin || dayData.temp);
        temperatureDifferences.push(difference);
      });

      setTemperatureDifferenceData({
        labels: labels,
        datasets: [{
          label: 'Temperature Difference',
          data: temperatureDifferences,
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
        }]
      });
    }
  };
  

  useEffect(() => {
    // Load default snow data for initial render
    handleSearch();
  }, [clickedLocation]);

  useEffect(() => {
    // Recalculate temperature differences whenever relevant state changes
    calculateTemperatureDifferences();
  }, [snowData, daysLimit]);

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
        <p style={{fontFamily: 'Anta', color: 'white', textAlign: 'center', marginBlock: '20px'}}>Search a location to see temeratures and conditions and use the wax key to wax accordingly</p>
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
        {/* <Input
          placeholder="Enter location..."
          value={""}
          style={{fontFamily: 'Anta', marginBottom: '10px'}}
          onChange={(e) => setLocation(e.target.value)}
          action={{
            icon: "search",
            onClick: handleSearch,
          }}
        /> */}
        <MapContainer onLocationClick={handleLocationClick}/>
        {/* Days limit selector */}
        <div>
        <Dropdown
        placeholder="Select days limit"
        options={daysLimitOptions}
        value={daysLimit}
        onChange={(e, { value }) => setDaysLimit(value)}
        selection
        style={{fontFamily: 'Anta', marginTop: '10px'}}
      />
      </div>
        </div>
       
        {snowData && snowData.days && (
          // <div style={{display: 'flex', alignItems: 'center'}}>
          //   <WeatherCard data={snowData}/>
          // </div>
          
          <div className="weather-cards-container" style={{ overflow: "auto", height: '280px', marginTop: '20px', scrollbarWidth: 'none', '-ms-overflow-style': 'none' }}>
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
                case 'wind':
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
              const formattedLabels = dayData.hours.map(hour => {
                // Convert the datetime string to a Date object
                const date = new Date(hour.datetime);
                // Format the time in AM/PM format
                return date.toLocaleString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });
              });
              return (
                <div key={index} style={{display: 'flex', fontFamily: 'Anta', justifyContent: 'center'}}>
                  {/* Render snow condition data for each day */}
                  <Segment style={{borderRadius: '10px', bordertop: '20px', width: '325px', marginBottom: '20px', marginRight: '20px', display: 'flex', flexDirection: 'column'}}>
                  <div>
                  <p>Location: {snowData.address}</p>
                  <p>{dayOfWeek}</p>
                  
                  {/* <p>Conditions: {dayData.conditions}</p> */}
                  <p>Tempurature:</p>
                  <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems:'flex-start' }}>
                  <p style={{ backgroundColor: temperatureColor }}>High: {dayData.tempmax} F</p>
                  <p style={{ backgroundColor: temperatureColor }}>Avg: {dayData.temp} F</p>
                  <p style={{ backgroundColor: temperatureColor }}>Low: {dayData.tempmin} F</p>
                  </div>
                  </div>
                  
                  <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                  {weatherIcon || dayData.icon}
                  </div>
                  <button onClick={handleExpandClick}>Show Hourly Temperature</button> {/* Button to expand/collapse */}
                  {showHourlyTemperature && snowData && snowData.days && (
    <div style={{ display: "flex", justifyContent: 'center', marginTop: '20px' }}>
      <div>
        <h3>Daily Temperature Chart</h3>
        
        <Bar
        
  data={{
    labels: dayData.hours.map(hour => hour.datetime), // Use the datetime as labels
    datasets: [
      {
        label: 'Hourly Temperature',
        data: dayData.hours.map(hour => hour.temp), // Use the hourly temperature data
        backgroundColor: dayData.hours.map(hour => {
          // Set different background colors based on temperature
          if (hour.temp >= 35) {
            return 'rgba(251, 238, 71, 0.2)'; // Red for high temperatures
          } else if (hour.temp >= 25) {
            return 'rgba(228, 70, 59, 0.2)'; // Orange for warm temperatures
          } else if (hour.temp >= 18) {
            return 'rgba(186, 110, 158, 0.2)'; // Yellow for mild temperatures
          } else if (hour.temp >= 10) {
            return 'rgba(111, 172, 206, 0.2)'; // Green for cool temperatures
          } else if (hour.temp >= 3) {
            return 'rgba(117, 173, 115, 0.2)'; // Blue for cold temperatures
          } else {
            return 'rgba(117, 173, 115, 0.2)'; // Purple for very cold temperatures
          }
        }),
        borderColor: dayData.hours.map(hour => {
          // Set corresponding border colors
          if (hour.temp >= 35) {
            return 'rgba(251, 238, 71, 1)';
          } else if (hour.temp >= 25) {
            return 'rgba(228, 70, 59, 1)';
          } else if (hour.temp >= 18) {
            return 'rgba(186, 110, 158, 1)';
          } else if (hour.temp >= 10) {
            return 'rgba(111, 172, 206, 1)';
          } else if (hour.temp >= 3) {
            return 'rgba(117, 173, 115, 1)';
          } else {
            return 'rgba(117, 173, 115, 1)';
          }
        }),
        borderWidth: 1
      }
    ]
  }}
  options={{
    scales: {
      y: {
        
        beginAtZero: true
      },
    }
  }}
/>

      </div>
    </div>
  )}

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



