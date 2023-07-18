import type { AppProps } from "next/app";
import { CSSReset } from "../styles/CSSReset";
import { ThemeProvider } from "styled-components";
import ColorProvider, { ColorContext } from "@/hooks/ColorProvider";
import { useContext } from "react";
import { AnimatePresence } from "framer-motion";

const theme = {
  light: {
    color1: "#2EC774",

    bg_gradient_1: "#fff",
    bg_gradient_2: "#DCDCDC",
    bg_container: "#E4DCD5",
    
    gradient_1: "#f9f9f986",
    gradient_2: "#97979750",
    gradient_3: "#6e6e6e1a",

    bg_card_1: "#a2a2a252",
    bg_card_2: "#98989866",
    bg_card_3: "#cecac1",
    bg_card_4: "#b8b5af",
    bg_card_5: "#d4d2cb",

    gray: "#7e7e7e",
    text_color: "#000",
    inverted_color: "#fff",
  },
  dark: {
    color1: "#2EC774",

    bg_gradient_1: "#000",
    bg_gradient_2: "#202020",
    bg_container: "#2E2828",

    gradient_1: "#e1e1e17f",
    gradient_2: "#4f4f4f66",
    gradient_3: "#4a4a4a4f",
    
    bg_card_1: "#a9a9a96c",
    bg_card_2: "#70707079",
    bg_card_3: "#474440",
    bg_card_4: "#514c49",
    bg_card_5: "#58514c",

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
export default function App(props: any) {
  return (
    <AnimatePresence
      mode="wait"
      initial={false}
      onExitComplete={() => window.scrollTo(0, 0)}
    >
      <ColorProvider initialValue="light">
        <MyApp {...props} />
      </ColorProvider>
    </AnimatePresence>
  );
}
