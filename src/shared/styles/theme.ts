import { createGlobalStyle } from 'styled-components';
// import { rgba } from 'polished'
// import url("https://p.typekit.net/p.css?s=1&k=mbf7fkk&ht=tk&f=39347.39348.39349&a=1312176&app=typekit&e=css");

export interface Colors {
  themeBackground: string;
  white: string;
  black: string;
  red: string;
  violate: string;
  gray: string;
  darkGray: string;
  lightGray: string;
  borderColor: string;
  borderColor2: string;
  buttonColor: string;
  cardBackground: string;
  InputBackground: string;
  Gradient1: string;
  Shadow1: string;
  Shadow2: string;
}

export const colors: Colors = {
  themeBackground: '#FCFCFD',
  white: '#ffffff',
  black: '#1E1E1E',
  red: '#A91F2E',
  violate: '#C61975',
  gray: '#777E91',
  darkGray: '#23262f',
  lightGray: '#B1B5C3',
  borderColor: '#E6E8EC',
  borderColor2: '#a9a9aa',
  buttonColor: '#F3B723',
  cardBackground: '#919ba5',
  InputBackground: '#767e86',
  Gradient1: 'linear-gradient(90deg, #b91372 0%, #6b0f1a 100%)',
  Shadow1: 'rgba(235, 39, 38, 0.2)',
  Shadow2: 'rgba(41, 44, 46, 0.1)',
};
export interface ThemeStarter {
  [propName: string]: string | undefined;
  themeBackground: string;
  white: string;
  black: string;
  red: string;
  violate: string;
  gray: string;
  darkGray: string;
  lightGray: string;
  borderColor: string;
  borderColor2: string;
  buttonColor: string;
  cardBackground: string;
  InputBackground: string;
  Gradient1: string;
  Shadow1: string;
  Shadow2: string;
}

export const theme: ThemeStarter = {
  themeBackground: colors.themeBackground,
  white: colors.white,
  black: colors.black,
  red: colors.red,
  violate: colors.violate,
  gray: colors.gray,
  darkGray: colors.darkGray,
  lightGray: colors.lightGray,
  borderColor: colors.borderColor,
  borderColor2: colors.borderColor2,
  buttonColor: colors.buttonColor,
  cardBackground: colors.cardBackground,
  InputBackground: colors.InputBackground,
  Gradient1: colors.Gradient1,
  Shadow1: colors.Shadow1,
  Shadow2: colors.Shadow2,
};
export interface ScreenSizes {
  mediaXS: number;
  mediaS: number;
  mediaM: number;
  mediaL: number;
  mediaXL: number;
  mediaXXL: number;
  mediaLX: number;
  mediaLXX: number;
}

export const screenSizes: ScreenSizes = {
  mediaXS: 410,
  mediaS: 640,
  mediaM: 800,
  mediaL: 1023,
  mediaXL: 1280,
  mediaXXL: 1440,
  mediaLX: 1800,
  mediaLXX: 2000,
};

export const GlobalStyle = createGlobalStyle`
* {
	margin: 0;
  padding: 0;
  box-sizing: border-box;
}
`;
