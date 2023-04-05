import type { AppProps } from "next/app";
import { CSSReset } from "../styles/CSSReset";
import { ThemeProvider } from "styled-components";

const theme = {
  color1: "#2EC774",

  body: "#303030",
  gray: "#7e7e7e",
  off_white: "#c9c9c9",
  text_color: "#fff",
};
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CSSReset />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
