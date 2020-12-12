import React, { Component } from "react";
import styled from "@emotion/styled";
import { Condition } from "./Condition"
import Sunny from "../../assets/img/Sunny.png"

export class CurrentWeather extends Component {
  render() {
    return (
      <div>
        <WeatherWrapper>
          <div>
            <Title>Now</Title>
            <Weather>Sunny 24° C</Weather>
          </div>
          <Image src= {Sunny} alt="Sunny"/>
        </WeatherWrapper>

        <Condition />

      </div>
    );
  }
}

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

