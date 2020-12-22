import React from "react";
import styled from "@emotion/styled";
import { Condition } from "./Condition";

export const CurrentWeather = ({ forecast }) => (
  <div>
    <WeatherWrapper>
      <div>
        <Weather>
          {`${forecast.current.condition.text}`} {`${forecast.current.temp_c}`}° C
        </Weather>
      </div>
      <Image src={`https:${forecast.current.condition.icon}`} alt="Сondition" />
    </WeatherWrapper>

    <Condition forecast={forecast} />
  </div>
);

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
