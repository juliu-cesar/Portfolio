import type { AppProps } from "next/app";
import { CSSReset } from "../styles/CSSReset";
import { ThemeProvider } from "styled-components";
import ColorProvider, { ColorContext } from "@/hooks/ColorProvider";
import { useContext } from "react";

const theme = {
  light: {
    color1: "#2EC774",

    bg_gradient_1: "#fff",
    bg_gradient_2: "#DCDCDC",
    bg_container: "#E4DCD5",
    bg_card_1: "#B7B7B7",
    bg_card_2: "#A8A8A8",

    gradient_1: "rgba(240, 240, 240, 0.75)",
    gradient_2: "rgba(209, 209, 209, 0.2)",
    gradient_3: "#C6C6C6",
    gradient_4: "#626262",
    
    gray: "#7e7e7e",
    text_color: "#000",
    inverted_color: "#fff",
  },
  dark: {
    color1: "#2EC774",
    
    bg_gradient_1: "#000",
    bg_gradient_2: "#202020",
    bg_container: "#2E2828",
    bg_card_1: "#B7B7B7",
    bg_card_2: "#B0B0B0",
    
    gradient_1: "rgba(225, 225, 225, 0.5)",
    gradient_2: "rgba(70, 70, 70, 0.4)",
    gradient_3: "rgba(45, 45, 45, 0.4)",

    gradient_4: "#DDDDDD",
    gradient_5: "#5F5F5F",

    gray: "#909090",
    text_color: "#fff",
    inverted_color: "#000",
  },
};

function MyApp({ Component, pageProps }: AppProps) {
  const context = useContext(ColorContext);
  return (
    <ThemeProvider theme={(theme as any)[context.mode]}>
      <CSSReset />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
function ProviderWrapper({ children }: { children: React.ReactNode }) {
  return <ColorProvider initialValue="light">{children}</ColorProvider>;
}
export default function App(props: any) {
  return (
    // <ProviderWrapper>
    <ColorProvider initialValue="dark">
      <MyApp {...props} />
    </ColorProvider>
    // </ProviderWrapper>
  );
}
