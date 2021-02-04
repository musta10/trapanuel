import React from "react";
import styled from "styled-components";

const Black = styled.button`
  width: 50px;
  height: 140px;
  background: black;
  position: absolute;
  margin: 1px;
  margin-left: -20px;

  ::active {
    background: #ccc;
  }
`;
const White = styled.button`
  width: 90px;
  height: 240px;
  background: white;
  border: 1px solid black;
  box-shadow: 2px 5px;
  margin: 1px;

  :active {
    background: #bcff36;
  }
`;

type Props = {
  color: String;
  note: string;
  clickHandler: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const Notas: React.FC<Props> = ({ color, note, clickHandler }) =>
  color === "white" ? (
    <White value={note} onClick={clickHandler} />
  ) : (
    <Black value={note} onClick={clickHandler} />
  );

export default Notas;
