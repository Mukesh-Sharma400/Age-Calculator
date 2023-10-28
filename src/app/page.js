"use client";

import styled from "styled-components";
import ArrowDownwardRoundedIcon from "@mui/icons-material/ArrowDownwardRounded";

export default function Home() {
  return (
    <DisplayWrapper>
      <FormWrapper>
        <InputDataWrapper>
          <ColWrapper>
            <Label>Day</Label>
            <DateContainer>
              <Input>26</Input>
            </DateContainer>
            <ErrorMessage>Must be a valid day</ErrorMessage>
          </ColWrapper>
          <ColWrapper>
            <Label>Month</Label>
            <DateContainer>
              <Input>06</Input>
            </DateContainer>
            <ErrorMessage>Must be a valid month</ErrorMessage>
          </ColWrapper>
          <ColWrapper>
            <Label>Year</Label>
            <DateContainer>
              <Input>2001</Input>
            </DateContainer>
            <ErrorMessage>Must be a valid year</ErrorMessage>
          </ColWrapper>
        </InputDataWrapper>
        <DividerWrapper>
          <Divider />
          <CalculateBtn>
            <ArrowDownIcon />
          </CalculateBtn>
        </DividerWrapper>
        <OutputDataWrapper>
          <OutputRow>
            <OutputNum>--</OutputNum>
            <OutputText>years</OutputText>
          </OutputRow>
          <OutputRow>
            <OutputNum>--</OutputNum>
            <OutputText>months</OutputText>
          </OutputRow>
          <OutputRow>
            <OutputNum>--</OutputNum>
            <OutputText>days</OutputText>
          </OutputRow>
        </OutputDataWrapper>
      </FormWrapper>
    </DisplayWrapper>
  );
}

const DisplayWrapper = styled.div`
  width: 100%;
  height: 97vh;
  background: #f0f0f0;
  position: relative;
`;

const FormWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) !important;
  border-radius: 20px 20px 100px 20px;
  width: 450px;
  padding: 2rem;
  background: #ffffff;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  display: flex;
  flex-direction: column;
  align-items: start;
  @media (max-width: 426px) {
    width: 350px;
    padding: 1rem;
  }
  @media (max-width: 376px) {
    width: 310px;
  }
  @media (max-width: 321px) {
    width: 270px;
  }
`;

const InputDataWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  background: #ffffff;
  @media (max-width: 376px) {
    gap: 0.5rem;
  }
`;

const ColWrapper = styled.div`
  background: #ffffff;
`;

const Label = styled.p`
  margin: 0;
  background: #ffffff;
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 2px;
  @media (max-width: 376px) {
    font-size: 9px;
  }
  @media (max-width: 321px) {
    font-size: 8px;
  }
`;

const DateContainer = styled.div`
  border: 1.3px solid lightgrey;
  background: #ffffff;
  width: 85px;
  border-radius: 5px;
  padding: 10px 10px 10px 13px;
  margin: 5px 0;
  @media (max-width: 426px) {
    width: 81.5px;
  }
  @media (max-width: 376px) {
    width: 74px;
  }
  @media (max-width: 321px) {
    width: 60px;
  }
`;

const Input = styled.p`
  margin: 0;
  background: #ffffff;
  font-size: 20px;
  font-weight: bold;
`;

const ErrorMessage = styled.p`
  margin: 0;
  background: #ffffff;
  font-size: 10px;
  font-style: italic;
  @media (max-width: 376px) {
    font-size: 9px;
  }
  @media (max-width: 321px) {
    font-size: 8px;
  }
`;

const DividerWrapper = styled.div`
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0;
  width: 100%;
  @media (max-width: 426px) {
    position: relative;
    margin: 40px auto;
  }
`;

const Divider = styled.hr`
  height: 100%;
  width: 100%;
`;

const CalculateBtn = styled.button`
  outline: none;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  padding: 0;
  @media (max-width: 426px) {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const ArrowDownIcon = styled(ArrowDownwardRoundedIcon)`
  color: #ffffff;
  background-color: #844dff;
  border-radius: 50%;
  width: 40px !important;
  height: 40px !important;
  padding: 10px;
  @media (max-width: 376px) {
    width: 35px !important;
    height: 35px !important;
  }
`;

const OutputDataWrapper = styled.div`
  background: #ffffff;
`;

const OutputRow = styled.div`
  background: #ffffff;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const OutputNum = styled.p`
  margin: 0;
  background: #ffffff;
  color: #844dff;
  font-size: 60px;
  font-weight: bold;
  font-style: italic;
  @media (max-width: 426px) {
    font-size: 55px;
  }
  @media (max-width: 376px) {
    font-size: 50px;
  }
  @media (max-width: 321px) {
    font-size: 45px;
  }
`;

const OutputText = styled.p`
  margin: 0;
  background: #ffffff;
  font-size: 60px;
  font-weight: bold;
  font-style: italic;
  @media (max-width: 426px) {
    font-size: 55px;
  }
  @media (max-width: 376px) {
    font-size: 50px;
  }
  @media (max-width: 321px) {
    font-size: 45px;
  }
`;
