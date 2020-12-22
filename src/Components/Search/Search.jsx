import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";

const getSearchItems = (value) => {
  return fetch(
    `https://api.weatherapi.com/v1/search.json?key=3460e5548e274bdfb28150601201012&q=${value}`
  );
};

export const Search = ({ isSearchOpen, toggleSearch, setCoordinate }) => {
  const [searchItems, setItems] = useState([]);

  const onChangeHandler = (e) =>
    e.target.value.length > 2 &&
    getSearchItems(e.target.value)
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
      });

  return (
    <Wrap isSearchOpen={isSearchOpen}>
      <CloseSearchButton onClick={() => toggleSearch(false)} />
      <input type="text" onChange={onChangeHandler} />
      {searchItems.map((item) => {
        return (
          <Item
            key={item.id}
            onClick={() => {
              setCoordinate(`${item.lat},${item.lon}`);
              toggleSearch(false);
            }}
          >
            {item.name}
          </Item>
        );
      })}
    </Wrap>
  );
};

const Wrap = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  transform: ${({ isSearchOpen }) =>
    isSearchOpen ? "translateX(0%)" : "translateX(-100%)"};
  padding: 64px 24px;
  z-index: 1;
  background-color: green;
  transition: transform 300ms;
  box-sizing: border-box;
`;

const CloseSearchButton = styled.div`
  position: absolute;
  height: 30px;
  width: 30px;
  background-color: #fff;
  top: 30px;
  right: 30px;
`;

const Item = styled.div`
  padding: 8px;
  cursor: pointer;
`;
