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

    gradient_1: "#f9f9f986",
    gradient_2: "#97979765",
    gradient_3: "#6e6e6e2e",

    gradient_4: "#e5e5e57e",
    gradient_5: "#9a9a9a5b",

    gradient_6: "#c4c4c44a",
    gradient_7: "#b3b3b391",
    gradient_8: "#ffffff9f",
    
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
    
    gradient_1: "#e1e1e17f",
    gradient_2: "#46464666",
    gradient_3: "#ffffff66",
    
    gradient_4: "#e5e5e57e",
    gradient_5: "#8686865b",

    gradient_6: "#8484843d",
    gradient_7: "#9393936c",
    gradient_8: "#d6d6d680",
    
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
