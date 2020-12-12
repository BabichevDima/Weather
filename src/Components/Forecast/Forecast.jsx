import React, { Component } from "react";
import styled from "@emotion/styled";
import Sunny from "../../assets/img/Sunny.png";
import SunnyClouds from "../../assets/img/sunny clouds.png";
import Cloudy from "../../assets/img/cloudy.png";
import SunCl from "../../assets/img/sun & clouds.png";
import Clouds from "../../assets/img/Clouds.png";

export class Forecast extends Component {
  render() {
    return (
      <Weather>
        <Title>Forecast</Title>

        <DailyForcast>
          <DailyItem>
            <Day>Monday</Day>
            <Img src={Sunny} alt="Sunny" />
            <Temperature>26° C</Temperature>
          </DailyItem>

          <DailyItem>
            <Day>Tuesday</Day>
            <Img src={SunnyClouds} alt="Sunny" />
            <Temperature>25° C</Temperature>
          </DailyItem>

          <DailyItem>
            <Day>Wednesday</Day>
            <Img src={Cloudy} alt="Sunny" />
            <Temperature>21° C</Temperature>
          </DailyItem>

          <DailyItem>
            <Day>Thursday</Day>
            <Img src={SunCl} alt="Sunny" />
            <Temperature>22° C</Temperature>
          </DailyItem>

          <DailyItem className="child">
            <Day>Friday</Day>
            <Img src={Clouds} alt="Sunny" />
            <Temperature>19° C</Temperature>
          </DailyItem>
        </DailyForcast>
      </Weather>
    );
  }
}

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
