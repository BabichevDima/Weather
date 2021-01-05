import React, { useState } from "react";
import styled from "@emotion/styled";
import Symbol from "../../assets/img/18.png";
import Water from "../../assets/img/5.jpg";
import { connect } from "react-redux";
import { toggleSearch } from "../../store/actions";

const getSearchItems = (value) => {
  return fetch(
    `https://api.weatherapi.com/v1/search.json?key=3460e5548e274bdfb28150601201012&q=${value}`
  );
};

const SearchComponent = ({ isSearchOpen, toggleSearch, setCoordinate }) => {
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
      <Img src={Symbol} onClick={() => toggleSearch(false)} />
      <Input type="text" onChange={onChangeHandler} />
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

const mapStateToProps = (store) => ({
  isSearchOpen: store.isSearchOpen,
});

const mapDispatchToProps = (dispatch) => {
  return {
    toggleSearch: () => dispatch(toggleSearch())
  };
};

export const Search = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchComponent);

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
  background-image: url(${Water});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  transition: transform 300ms;
  box-sizing: border-box;
`;

const Img = styled.img`
  position: absolute;
  height: 30px;
  width: 30px;
  top: 30px;
  right: 30px;
  cursor: pointer;
  &:hover {
    transition: 1s;
    transform: translateX(-40%);
  }
`;

const Item = styled.div`
  padding: 8px;
  cursor: pointer;
`;

const Input = styled.input`
  cursor: pointer;
  width: 380px;
`;
