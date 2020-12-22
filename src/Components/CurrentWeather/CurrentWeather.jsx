import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { Condition } from "./Condition";

const getWeatherInNewYork = () => {
  return fetch(
    "https://api.weatherapi.com/v1/current.json?key=3460e5548e274bdfb28150601201012&q&q=New_York"
  );
};

export const CurrentWeather = () => {
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

  return (
    <div>
      <WeatherWrapper>
        <div>
          <Title>{}</Title>
          <Weather>
            {`${data?.current.condition.text}`} {`${data?.current.temp_c}`}° C
          </Weather>
        </div>
        <Image src={`https:${data?.current.condition.icon}`} alt="Сondition" />
      </WeatherWrapper>

      <Condition />
    </div>
  );
};

const WeatherWrapper = styled.div`
  display: flex;
`;

const Title = styled.div`
  font-size: 32px;
  margin-bottom: 37px;
`;

const Weather = styled.div`
  font-size: 44px;
`;

const Image = styled.img`
  width: 231px;
  height: 186px;
`;
