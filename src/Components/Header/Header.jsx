import React, { Component } from "react";
import styled from "@emotion/styled";

export class Header extends Component {
  render() {
    return (
      <HeaderStyled>
        <Title>New York</Title>
        <Time>6:24 PM EDT</Time>
      </HeaderStyled>
    );
  }
}

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
