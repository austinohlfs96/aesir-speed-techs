import React, { useState } from 'react';
import { Card, Icon, Dropdown } from 'semantic-ui-react';

const WeatherCard = ({ data }) => {
  const [filterDays, setFilterDays] = useState(1);

  const handleFilterChange = (event, { value }) => {
    setFilterDays(value);
  };
  console.log(data)

  const filteredDays = filterDays
    ? data.days.slice(0, filterDays)
    : data.days;

  const daysOptions = [
    { key: 1, text: '1 day', value: 1 },
    { key: 3, text: '3 days', value: 3 },
    { key: 7, text: '7 days', value: 7 },
    { key: 14, text: '14 days', value: 14 },
    // Add more options as needed
  ];

  return (
    <div className="weather-card-container">
      <div>
      <Dropdown
        placeholder="Filter by number of days"
        selection
        options={daysOptions}
        onChange={handleFilterChange}
        value={filterDays}
        style={{fontFamily: 'Anta', marginTop: '10px'}}
      />
      </div>
      
      {filteredDays.map((dayData, index) => (
        <Card key={index} className="weather-card">
          <Card.Content>
          <Card.Header>{data.address}</Card.Header>
            <Card.Header>{dayData.datetime}</Card.Header>
            <Card.Meta>{dayData.conditions}</Card.Meta>
            <Card.Description>
              <p>High: {dayData.tempmax} F</p>
              <p>Avg: {dayData.temp} F</p>
              <p>Low: {dayData.tempmin} F</p>
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Icon name={dayData.icon} /> {/* Add relevant weather icons */}
            {/* Add more icons for other weather conditions */}
          </Card.Content>
        </Card>
      ))}
    </div>
  );
};

export default WeatherCard;
