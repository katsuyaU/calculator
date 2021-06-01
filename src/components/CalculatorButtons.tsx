import { css } from "@emotion/core"
import styled from "@emotion/styled"
import React from "react"
import { CalculatorButton } from "./CalculatorButton"

const Container = styled.div`
  width: 320px;
  height: 200px;
  /*dev */
  background-color: black;

  display: grid;
  gap: 1px;
  grid-template-columns: 3fr 1fr;
  grid-template-rows: 1fr 4fr;
  grid-template-areas:
    "TOP    RIGHT"
    "BOTTOM RIGHT";
`

const WIDTH_HEIGHT_100_CSS = css`
  width: 100%;
  height: 100%;
`

const Top = styled.div`
  ${WIDTH_HEIGHT_100_CSS}
  grid-area: TOP;
  gap: 1px;
  display: flex;
`

const Right = styled.div`
  ${WIDTH_HEIGHT_100_CSS}
  grid-area: RIGHT;
  display: flex;
  gap: 1px;
  flex-direction: column;
`

const Bottom = styled.div`
  ${WIDTH_HEIGHT_100_CSS}
  grid-area: BOTTOM;
  gap: 1px;
  display: flex;
  flex-direction: column;
`

const Row = styled.div`
  ${WIDTH_HEIGHT_100_CSS}
  gap: 1px;
  display: flex;
`

interface Props {
  onOperatorClick?: (operator: "÷" | "×" | "-" | "+" | "=") => void
  onOtherClick?: (text: "AC" | "C" | "+/-" | "%" | ".") => void
  onNumberClick?: (numberText: "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9") => void
}

export const CalculatorButtons: React.VFC<Props> = props => {
  return (
    <Container>
      <Top>
        <CalculatorButton
          color="white"
          fontSize="16px"
          bgColor="#424446"
          text={0 ? "AC" : "C"}
          onClick={props.onOtherClick}
        />
        <CalculatorButton color="white" fontSize="16px" bgColor="#424446" text="+/-" onClick={props.onOtherClick} />
        <CalculatorButton color="white" fontSize="16px" bgColor="#424446" text="%" onClick={props.onOtherClick} />
      </Top>
      <Bottom>
        <Row>
          <CalculatorButton color="white" fontSize="24px" bgColor="#7E7E7E" text="7" onClick={props.onNumberClick} />
          <CalculatorButton color="white" fontSize="24px" bgColor="#7E7E7E" text="8" onClick={props.onNumberClick} />
          <CalculatorButton color="white" fontSize="24px" bgColor="#7E7E7E" text="9" onClick={props.onNumberClick} />
        </Row>
        <Row>
          <CalculatorButton color="white" fontSize="24px" bgColor="#7E7E7E" text="4" onClick={props.onNumberClick} />
          <CalculatorButton color="white" fontSize="24px" bgColor="#7E7E7E" text="5" onClick={props.onNumberClick} />
          <CalculatorButton color="white" fontSize="24px" bgColor="#7E7E7E" text="6" onClick={props.onNumberClick} />
        </Row>
        <Row>
          <CalculatorButton color="white" fontSize="24px" bgColor="#7E7E7E" text="1" onClick={props.onNumberClick} />
          <CalculatorButton color="white" fontSize="24px" bgColor="#7E7E7E" text="2" onClick={props.onNumberClick} />
          <CalculatorButton color="white" fontSize="24px" bgColor="#7E7E7E" text="3" onClick={props.onNumberClick} />
        </Row>
        <Row>
          <CalculatorButton color="white" fontSize="24px" bgColor="#7E7E7E" text="0" onClick={props.onNumberClick} />
          <CalculatorButton color="white" fontSize="24px" bgColor="#7E7E7E" text="." onClick={props.onOtherClick} />
        </Row>
      </Bottom>
      <Right>
        <CalculatorButton fontSize="20px" bgColor="#FE9F10" text="÷" onClick={props.onOperatorClick} />
        <CalculatorButton fontSize="20px" bgColor="#FE9F10" text="×" onClick={props.onOperatorClick} />
        <CalculatorButton fontSize="20px" bgColor="#FE9F10" text="-" onClick={props.onOperatorClick} />
        <CalculatorButton fontSize="20px" bgColor="#FE9F10" text="+" onClick={props.onOperatorClick} />
        <CalculatorButton fontSize="20px" bgColor="#FE9F10" text="=" onClick={props.onOperatorClick} />
      </Right>
    </Container>
  )
}
