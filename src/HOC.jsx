import React from "react";

const HOC = (Component) => {
  return ({ name, ...props }) => {
    const clickHandler = () => {
      console.log(name);
    };
    return <Component clickHandler={clickHandler} {...props} />;
  };
};

const Button = ({ clickHandler, buttonName }) => {
  return <button onClick={clickHandler}>{buttonName}</button>;
};

const DivButton = ({ clickHandler, buttonText, isShow }) => {
  return (
    isShow && (
      <div
        style={{
          padding: "8px",
          border: "1px solid red",
          display: "inline-block",
        }}
        onClick={clickHandler}
      >
        {buttonText}
      </div>
    )
  );
};

const ButtonWithHOC = HOC(Button);
const DivButtonWithHOC = HOC(DivButton);

export const App = () => {
  return (
    <>
      <ButtonWithHOC name="Dima" buttonName="show name" />
      <DivButtonWithHOC name="Vlas" buttonText="show Dima name" isShow />
    </>
  );
};



const Comp = ()