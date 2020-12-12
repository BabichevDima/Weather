import React, { Component } from "react";
import { Header } from "./Components/Header";
import styled from "@emotion/styled";
import { CurrentWeather } from "./Components/CurrentWeather"
import { Forecast } from "./Components/Forecast"

export class App extends Component {
  render() {
    return (
      <Wrapper>
        <Header />
        <CurrentWeather />
        <Forecast />
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
 height: 100vh;
 background-color: #55676d;
 width: 414px;
 height: 830px;
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translate(-50%, -50%);
 padding: 50px 35px 0px 39px;
`
