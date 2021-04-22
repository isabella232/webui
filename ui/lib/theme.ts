import green from "@material-ui/core/colors/green";
import purple from "@material-ui/core/colors/purple";
import { createMuiTheme, Theme } from "@material-ui/core/styles";
import { createGlobalStyle } from "styled-components";

const theme = createMuiTheme({
  typography: {
    fontFamily: "Montserrat",
  },
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
  },
});

export default theme;

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${(props: { theme: Theme }) =>
      props.theme.typography.fontFamily}, sans-serif;
    padding: 0;
    margin: 0;
  }
`;

export const LAYOUT = {
  topNavHeight: 60,
  leftNavWidth: 240,
};
