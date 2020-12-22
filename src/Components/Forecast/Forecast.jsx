import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";

const getWeatherInNewYork = () => {
  return fetch(
    "https://api.weatherapi.com/v1/forecast.json?key=3460e5548e274bdfb28150601201012&q&q&q=New_York&days=3"
  );
};

export const Forecast = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    getWeatherInNewYork()
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data);
      });
  }, []);

  const forcastDay = data ? data.forecast.forecastday: [];
  console.log(
    "🚀 ~ file: Forecast.jsx ~ line 24 ~ Forecast ~ numbers",
    forcastDay
  );

  const forcastWeatherDay = forcastDay.map((weatherDay) => (
    <DailyItem>
      <Day>{`${weatherDay.date}`}</Day>
      <Img src={`https:${weatherDay.day.condition.icon}`} alt="Condition" />
      <Temperature>{`${weatherDay.day.avgtemp_c}`}° C</Temperature>
    </DailyItem>
  ));

  return (
    <Weather>
      <Title>Forecast</Title>

      <DailyForcast>{forcastWeatherDay}</DailyForcast>

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

const DailyForcast = styled.div``;

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
