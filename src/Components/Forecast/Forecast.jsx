import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";

const getForecast = (coordinate="New_York") => {
  return fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=3460e5548e274bdfb28150601201012&q=${coordinate}&days=3`
  );
};

export const Forecast = ({coordinate}) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    getForecast(coordinate)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data);
      });
  }, [coordinate]);

  const forecastDay = data ? data.forecast.forecastday : [];

  return (
    <Weather>
      <Title>Forecast</Title>

      <DailyForecast>
        {forecastDay.map((weatherDay) => (
          <DailyItem key={weatherDay.date_epoch}>
            <Day>{`${weatherDay.date}`}</Day>
            <Img
              src={`https:${weatherDay.day.condition.icon}`}
              alt="Condition"
            />
            <Temperature>{`${weatherDay.day.avgtemp_c}`}° C</Temperature>
          </DailyItem>
        ))}
      </DailyForecast>

    </Weather>
  );
};

const Weather = styled.div``;

const Title = styled.div`
  font-size: 18px;
  padding-bottom: 13px;
  border-bottom: 1px solid #28c1c9;
  margin-bottom: 8px;
`;

const DailyForecast = styled.div``;

const DailyItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #28c1c9;
  margin-bottom: 8px;
`;

const Day = styled.div`
  font-size: 18px;
`;

const Img = styled.img`
  width: 65px;
  height: 50px;
`;

const Temperature = styled.div`
  margin-right: 20px;
`;
