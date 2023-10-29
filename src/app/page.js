"use client";

import { useState } from "react";
import styled from "styled-components";
import ArrowDownwardRoundedIcon from "@mui/icons-material/ArrowDownwardRounded";

export default function Home() {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [age, setAge] = useState({ years: 0, months: 0, days: 0 });

  const handleDayChange = (e) => {
    setDay(e.target.value);
  };

  const handleMonthChange = (e) => {
    setMonth(e.target.value);
  };

  const handleYearChange = (e) => {
    setYear(e.target.value);
  };

  const calculateAge = () => {
    if (day && month && year) {
      const birthDate = new Date(year, month - 1, day);
      const currentDate = new Date();

      const ageInMilliseconds = currentDate - birthDate;
      const ageInYears = Math.floor(
        ageInMilliseconds / (365.25 * 24 * 60 * 60 * 1000)
      );
      const ageInMonths = Math.floor(ageInYears * 12);
      const ageInDays = Math.floor(ageInMilliseconds / (24 * 60 * 60 * 1000));

      let years = ageInYears;
      let months = ageInMonths - ageInYears * 12;
      let days = ageInDays - ageInYears * 365 - months * 30;

      if (days > 30) {
        months += Math.floor(days / 30);
        days = days % 30;
      }
      if (months > 12) {
        years += Math.floor(months / 12);
        months = months % 12;
      }

      setAge({
        years,
        months,
        days,
      });
    }
  };

  return (
    <DisplayWrapper>
      <FormWrapper>
        <InputDataWrapper>
          <ColWrapper>
            <Label>Day</Label>
            <DateContainer>
              <Input value={day} onChange={handleDayChange} />
            </DateContainer>
            <ErrorMessage>Must be a valid day</ErrorMessage>
          </ColWrapper>
          <ColWrapper>
            <Label>Month</Label>
            <DateContainer>
              <Input value={month} onChange={handleMonthChange} />
            </DateContainer>
            <ErrorMessage>Must be a valid month</ErrorMessage>
          </ColWrapper>
          <ColWrapper>
            <Label>Year</Label>
            <DateContainer>
              <Input value={year} onChange={handleYearChange} />
            </DateContainer>
            <ErrorMessage>Must be a valid year</ErrorMessage>
          </ColWrapper>
        </InputDataWrapper>
        <DividerWrapper>
          <Divider />
          <CalculateBtn onClick={calculateAge}>
            <ArrowDownIcon />
          </CalculateBtn>
        </DividerWrapper>
        <OutputDataWrapper>
          <OutputRow>
            <OutputNum>{age.years ? age.years : "--"}</OutputNum>
            <OutputText>years</OutputText>
          </OutputRow>
          <OutputRow>
            <OutputNum>{age.months ? age.months : "--"}</OutputNum>
            <OutputText>months</OutputText>
          </OutputRow>
          <OutputRow>
            <OutputNum>{age.days ? age.days : "--"}</OutputNum>
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

const Input = styled.textarea`
  margin: 0;
  padding: 0;
  background: #ffffff;
  font-size: 20px;
  font-weight: bold;
  resize: none;
  border: none;
  outline: none;
  width: 100%;
  height: 24px;
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
  cursor: pointer;
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
