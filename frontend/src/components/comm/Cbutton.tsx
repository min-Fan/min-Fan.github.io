import React from "react";
import styled from "styled-components";

interface ButtonProps {
  $btntype?: Btntype;
  $theme?: string
}

const CbuttonSty = styled.div<ButtonProps>`
  width: 100%;
  height: 100%;
  border: 1px solid #fff;
  background-color: ${(props) =>
    props.$btntype == "border" && !props.$theme ? "#000" : "#fff"};
  color: ${(props) => (props.$btntype == "border" && !props.$theme ? "#fff" : "#000")};
  border-radius: 30px;
  padding: 10px 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  span {
    text-align: center;
    font-size: 16px;
    font-weight: 600;
    text-transform: capitalize;
    white-space: nowrap;
  }
`;

export enum Btntype {
  BOR = "border",
  BG = "background",
}

type CbuttonProps = {
  name: string;
  type: Btntype;
  theme?: string
};
export default function Cbutton(props: CbuttonProps) {
  return (
    <CbuttonSty $btntype={props.type} $theme={props.theme}>
      <span>{props.name}</span>
    </CbuttonSty>
  );
}
