import { createGlobalStyle } from "styled-components";
import { css } from "styled-components";

type Ttheme = {
  themeNumber: number;
};

export const GlobalStyles = createGlobalStyle<Ttheme>`
    ${(props) => css`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "League Spartan", sans-serif;
        font-weight: 700;
      }

      html {
        font-size: 62.5%;
      }

      :root {
        --body-bg: ${props.themeNumber === 1
          ? "#3A4663"
          : props.themeNumber === 2
          ? "#E6E6E6"
          : "#17062A"};

        --header-output-text: ${props.themeNumber === 1
          ? "#FFFFFF"
          : props.themeNumber === 2
          ? "#36362C"
          : "#FFE53D"};

        --slider-bg: ${props.themeNumber === 1
          ? "#242D44"
          : props.themeNumber === 2
          ? "#D2CDCD"
          : "#1E0936"};

        --slider-thumb: ${props.themeNumber === 1
          ? "#D03F2F"
          : props.themeNumber === 2
          ? "#C85402"
          : "#00DED0"};

        --slider-thumb-hover: ${props.themeNumber === 1
          ? "#F96B5B"
          : props.themeNumber === 2
          ? "#FF8A38"
          : "#93FFF8"};

        --output-bg: ${props.themeNumber === 1
          ? "#181F33"
          : props.themeNumber === 2
          ? "#EEEEEE"
          : "#1E0936"};

        --output-text: ${props.themeNumber === 1
          ? "#FFFFFF"
          : props.themeNumber === 2
          ? "#36362C"
          : "#FFE53D"};

        --input-bg: ${props.themeNumber === 1
          ? "#242D44"
          : props.themeNumber === 2
          ? "#D2CDCD"
          : "#1E0936"};

        --input-button-text: ${props.themeNumber === 1
          ? "#434A59"
          : props.themeNumber === 2
          ? "#36362C"
          : "#FFE53D"};

        --input-button-bg: ${props.themeNumber === 1
          ? "#EAE3DC"
          : props.themeNumber === 2
          ? "#E5E4E1"
          : "#331C4D"};

        --input-button-bg-hover: ${props.themeNumber === 1
          ? "#FFFFFE"
          : props.themeNumber === 2
          ? "#FFFFFF"
          : "#6C34AC"};

        --input-button-box-shadow: ${props.themeNumber === 1
          ? "inset 0px -4px 0px #B3A497"
          : props.themeNumber === 2
          ? "inset 0px -4px 0px #A79E91"
          : "inset 0px -4px 0px #881C9E"};

        --delete-reset-button-bg: ${props.themeNumber === 1
          ? "#647198"
          : props.themeNumber === 2
          ? "#378187"
          : "#56077C"};

        --delete-reset-button-bg-hover: ${props.themeNumber === 1
          ? "#A2B2E1"
          : props.themeNumber === 2
          ? "#62B5BC"
          : "#8631AF"};

        --delete-reset-button-box-shadow: ${props.themeNumber === 1
          ? "inset 0px -4px 0px #414E73"
          : props.themeNumber === 2
          ? "inset 0px -4px 0px #1B6066"
          : "inset 0px -4px 0px #BE15F4"};

        --equal-button-bg: ${props.themeNumber === 1
          ? "#D03F2F"
          : props.themeNumber === 2
          ? "#C85402"
          : "#00DED0"};

        --equal-button-bg-hover: ${props.themeNumber === 1
          ? "#F96B5B"
          : props.themeNumber === 2
          ? "#FF8A38"
          : "#93FFF8"};

        --equal-button-text: ${props.themeNumber === 1 ? "#FFFFFF" : "#1A2327"};

        --equal-button-box-shadow: ${props.themeNumber === 1
          ? "inset 0px -4px 0px #93261A"
          : props.themeNumber === 2
          ? "inset 0px -4px 0px #873901"
          : "inset 0px -4px 0px #6CF9F1"};
      }
    `}

    body {
        min-height: 100vh;
        background: var(--body-bg);
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 3rem 0;

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
            padding: 9.8rem 0 9.6rem;
        }
    }

    #root {
        display: flex;
        flex-direction: column;
        gap: 3.2rem;
        width: 32.7rem;

        @media (min-width: 90em) {
            width: 54rem;
        }
    }

  
`;
