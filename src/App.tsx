import { useState } from "react";
import { GlobalStyles } from "./components/Globals";
import styled, { css } from "styled-components";

function App() {
  const [theme, setTheme] = useState<number>(1);
  const [output, setOutput] = useState<number | null>(null);

  const buttons = [
    "7",
    "8",
    "9",
    "DEL",
    "4",
    "5",
    "6",
    "+",
    "1",
    "2",
    "3",
    "-",
    ".",
    "0",
    "/",
    "x",
    "RESET",
    "=",
  ];

  return (
    <>
      <GlobalStyles themeNumber={theme}></GlobalStyles>

      <Header>
        <Title>calc</Title>
        <ThemeContainer>
          <ThemeText>THEME</ThemeText>
          <SliderContainer>
            <ThemeNumberContainer>
              <ThemeNumber>1</ThemeNumber>
              <ThemeNumber>2</ThemeNumber>
              <ThemeNumber>3</ThemeNumber>
            </ThemeNumberContainer>
            <Slider
              type="range"
              min={"1"}
              max={"3"}
              value={theme}
              onChange={(event: React.FormEvent<HTMLInputElement>) => {
                setTheme(Number((event.target as HTMLInputElement).value));
              }}
            ></Slider>
          </SliderContainer>
        </ThemeContainer>
      </Header>

      <Main>
        <Output>{output}</Output>
        <InputContainer>
          {buttons.map((button) => {
            if (button === "DEL") {
              return <Delete key={button}>{button}</Delete>;
            } else if (button === "RESET") {
              return <Reset key={button}>{button}</Reset>;
            } else if (button === "=") {
              return <Equals key={button}>{button}</Equals>;
            } else {
              return <InputButton key={button}>{button}</InputButton>;
            }
          })}
        </InputContainer>
      </Main>
    </>
  );
}

const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--header-output-text);
`;

const Title = styled.h1`
  font-size: 3.2rem;
  line-height: 0.90625em;
  letter-spacing: -0.533333px;
`;

const ThemeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2.6rem;
  font-size: 1.2rem;
  line-height: 0.92em;
`;

const ThemeText = styled.p`
  margin-top: 1.5rem;
`;

const SliderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 7.1rem;
  align-items: center;
`;

const ThemeNumberContainer = styled.div`
  display: flex;
  gap: 1.1rem;
`;

const ThemeNumber = styled.p``;

const Slider = styled.input`
  width: 100%;
  min-height: 2.6rem;
  border-radius: 13px;
  appearance: none;
  background: var(--slider-bg);
  padding: 0 0.5rem;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 1.6rem;
    height: 1.6rem;
    background: var(--slider-thumb);
    border-radius: 50%;
    transition: background 0.3s;
    cursor: pointer;

    &:hover,
    &:active {
      background: var(--slider-thumb-hover);
    }
  }
`;

const Main = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

const Output = styled.div`
  width: 100%;
  font-size: 4rem;
  line-height: 0.92em;
  letter-spacing: -0.666667px;
  text-align: right;
  color: var(--output-text);
  background: var(--output-bg);
  overflow-x: auto;
  padding: 2.9rem 2.4rem 2.2rem;
  border-radius: 10px;

  &::-webkit-scrollbar {
    width: 10px;
    background: var(--slider-thumb);
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--output-text);
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: var(--slider-thumb-hover);
    border-radius: 10px;
  }

  @media (min-width: 90em) {
    font-size: 5.6rem;
    padding: 4rem 3.2rem 3.6rem;
  }
`;

const InputContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 6rem);
  grid-template-rows: repeat(5, 6.4rem);
  gap: 1.3rem;
  background: var(--input-bg);
  padding: 2.4rem;
  border-radius: 10px;
  color: var(--input-button-text);

  @media (min-width: 90em) {
    grid-template-columns: repeat(4, 10.1rem);
    column-gap: 2.5rem;
    row-gap: 2.4rem;
    padding: 3.2rem 3rem;
  }
`;

const InputButton = styled.button`
  box-shadow: var(--input-button-box-shadow);
  border: none;
  cursor: pointer;
  font-size: 3.2rem;
  line-height: 0.92em;
  letter-spacing: -0.533333px;
  border-radius: 5px;
  transition: background 0.5s;

  &:hover {
    background: var(--input-button-bg-hover);
  }

  @media (min-width: 90em) {
    font-size: 4rem;
    letter-spacing: -0.666667px;
  }
`;

const Delete = styled.button`
  font-size: 2rem;
  line-height: 0.9em;
  letter-spacing: -0.333333px;
  background: var(--delete-reset-button-bg);
  color: #ffffff;
  box-shadow: var(--delete-reset-button-box-shadow);
  border-radius: 5px;
  cursor: pointer;
  border: none;
  transition: background 0.5s;

  &:hover {
    background: var(--delete-reset-button-bg-hover);
  }

  @media (min-width: 90em) {
    font-size: 2.8rem;
  }
`;

const Reset = styled.button`
  font-size: 2rem;
  line-height: 0.9em;
  letter-spacing: -0.333333px;
  background: var(--delete-reset-button-bg);
  color: #ffffff;
  box-shadow: var(--delete-reset-button-box-shadow);
  cursor: pointer;
  border-radius: 5px;
  transition: background 0.5s;
  border: none;
  grid-column: 1 / 3;

  &:hover {
    background: var(--delete-reset-button-bg-hover);
  }

  @media (min-width: 90em) {
    font-size: 2.8rem;
  }
`;

const Equals = styled.button`
  font-size: 2rem;
  line-height: 0.9em;
  letter-spacing: -0.333333px;
  background: var(--equal-button-bg);
  color: var(--equal-button-text);
  box-shadow: var(--equal-button-box-shadow);
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.5s;
  border: none;
  grid-column: 3 / 5;

  &:hover {
    background: var(--equal-button-bg-hover);
  }

  @media (min-width: 90em) {
    font-size: 2.8rem;
  }
`;

export default App;
