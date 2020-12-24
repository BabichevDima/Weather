import React from "react";
import styled from "@emotion/styled";
import Mappin from "../../assets/img/mappin.png";

export const Header = ({ forecast, toggleSearch }) => (
  <HeaderStyled>
    <Img src={Mappin} onClick={() => toggleSearch(true)} />
    <Title>{forecast.location.name}</Title>
    <Time>{forecast.location.localtime}</Time>
  </HeaderStyled>
);

const HeaderStyled = styled.header`
  position: relative;
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

const Img = styled.img`
  position: absolute;
  height: 30px;
  width: 30px;
  top: 30px;
  right: 30px;
  cursor: pointer;
  &:hover {
    height: 34px;
    width: 34px;
    transition: 0.8s;
  }
`;
