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
    bg_card_1: "#aeaeae5f",
    bg_card_2: "#98989866",
    bg_card_3: "#4949492d",

    gradient_1: "rgba(249, 249, 249, 0.526)",
    gradient_2: "rgba(151, 151, 151, 0.397)",
    gradient_3: "rgba(110, 110, 110, 0.182)",

    gradient_4: "#e5e5e57e",
    gradient_5: "#9a9a9a5b",
    
    gray: "#7e7e7e",
    text_color: "#000",
    inverted_color: "#fff",
  },
  dark: {
    color1: "#2EC774",
    
    bg_gradient_1: "#000",
    bg_gradient_2: "#202020",
    bg_container: "#2E2828",
    bg_card_1: "#a9a9a96c",
    bg_card_2: "#70707079",
    bg_card_3: "#49494946",
    
    gradient_1: "rgba(225, 225, 225, 0.5)",
    gradient_2: "rgba(70, 70, 70, 0.4)",
    gradient_3: "rgba(45, 45, 45, 0.4)",
    
    gradient_4: "#e5e5e57e",
    gradient_5: "#8686865b",
    
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
