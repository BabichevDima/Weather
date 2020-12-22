import React from "react";
import styled from "@emotion/styled";

export const Header = ({forecast, toggleSearch}) => (
  <HeaderStyled>
    <OpenSearchButton onClick={() => toggleSearch(true)}/>
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

const OpenSearchButton = styled.div`
position: absolute;
height:30px;
width: 30px;
background-color: red;
top: 30px;
right: 30px;
`;
