import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";

const getWeatherInNewYork = () => {
  return fetch(
    "https://api.weatherapi.com/v1/current.json?key=3460e5548e274bdfb28150601201012&q&q=New_York"
  );
};

export const Header = () => {
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
    <HeaderStyled>
      <Title>{data?.location.name}</Title>
      <Time>{data?.location.localtime}</Time>
    </HeaderStyled>
  );
};

const HeaderStyled = styled.header`
  text-align: center;
  margin-bottom: 60px;
`;

const Title = styled.h1`
  color: #273033;
  font-size: 40px;
  margin-bottom: 18px;
`;

const Time = styled.span`
  color: #000;
`;
