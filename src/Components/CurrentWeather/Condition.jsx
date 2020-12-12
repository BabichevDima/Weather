import React, { Children, Component } from "react";
import styled from "@emotion/styled";
import Foliage from "../../assets/img/Foliage.png";
import Path from "../../assets/img/Path.png";
import PathLot from "../../assets/img/PathLot.png";

export class Condition extends Component {
  render() {
    return (
      <ConditionWrapper>
        <ConditionItem>
          <ConditionImg src={Foliage} />
          <ConditionTitle>3mph</ConditionTitle>
        </ConditionItem>

        <ConditionItem>
          <ConditionImg src={Path} />
          <ConditionTitle>69%</ConditionTitle>
        </ConditionItem>

        <ConditionItem>
          <ConditionImg src={PathLot} />
          <ConditionTitle>83%</ConditionTitle>
        </ConditionItem>
      </ConditionWrapper>
    );
  }
}

const ConditionWrapper = styled.div`
  display: flex;
  border-bottom: 1px solid #28c1c9;
  text-align: center;
  margin-bottom: 19px;
`;

const ConditionItem = styled.div`
  border-right: 1px solid #28c1c9;
  flex-grow: 1;
  padding-top: 20px;
  &:last-child {
    border: none;
  }
`;

const ConditionImg = styled.img`
  height: 55px;
  width: 55px;
  margin-bottom: 11px;
`;

const ConditionTitle = styled.div`
  margin-bottom: 11px;
`;
