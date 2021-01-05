import React, { useState, useEffect } from "react";
import { Header } from "./Components/Header";
import styled from "@emotion/styled";
import { CurrentWeather } from "./Components/CurrentWeather";
import { Forecast } from "./Components/Forecast";
import { Search } from "./Components/Search";
import Sky from "./assets/img/sky.jpg";

const getWeather = (coordinate = "New_York") => {
  return fetch(
    `https://api.weatherapi.com/v1/current.json?key=3460e5548e274bdfb28150601201012&q=${coordinate}`
  );
};

export const App = () => {
  const [data, setData] = useState(null);
  const [coordinate, setCoordinate] = useState();

  useEffect(() => {
    getWeather(coordinate)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data);
      });
  }, [coordinate]);

  return (
    data && (
      <Wrapper>
        <Search
          setCoordinate={setCoordinate}
        />
        <Header forecast={data} />
        <CurrentWeather forecast={data} />
        <Forecast coordinate={coordinate} />
      </Wrapper>
    )
  );
};

const Wrapper = styled.div`
  overflow: hidden;
  background-image: url(${Sky});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 414px;
  height: 830px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 50px 35px 0px 39px;
`;
