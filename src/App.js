import React, { useState, useEffect } from "react";
import { Header } from "./Components/Header";
import styled from "@emotion/styled";
import { CurrentWeather } from "./Components/CurrentWeather";
import { Forecast } from "./Components/Forecast";
import { Search } from "./Components/Search";

const getWeather = (coordinate = "New_York") => {
  return fetch(
    `https://api.weatherapi.com/v1/current.json?key=3460e5548e274bdfb28150601201012&q=${coordinate}`
  );
};

export const App = () => {
  const [data, setData] = useState(null);
  const [isSearchOpen, toggleSearch] = useState(false);
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
          isSearchOpen={isSearchOpen}
          toggleSearch={toggleSearch}
          setCoordinate={setCoordinate}
        />
        <Header forecast={data} toggleSearch={toggleSearch} />
        <CurrentWeather forecast={data} />
        <Forecast coordinate={coordinate}/>
      </Wrapper>
    )
  );
};

const Wrapper = styled.div`
  overflow: hidden;
  background-color: #55676d;
  width: 414px;
  height: 830px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 50px 35px 0px 39px;
`;
