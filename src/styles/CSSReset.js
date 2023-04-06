import { createGlobalStyle } from "styled-components";

export const CSSReset = createGlobalStyle`
  /* Reset */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background: ${({ theme }) => theme.inverted_color};
    background: linear-gradient(90deg, ${({ theme }) =>
      theme.bg_gradient_1} 0%, ${({ theme }) => theme.bg_gradient_2} 100%);
		color: ${({ theme }) => theme.text_color};
    font-family: 'Kanit', sans-serif;
    width: 99vw;
    overflow-x: hidden;
  }
  /* NextJS */
  #__next {
    width: 100%;
    min-width: 300px;
  }
  /* Globals */
  button,
  a {
    cursor: pointer;
    text-decoration: none;
    opacity: 1;
    transition: all .2s;
  }
  .icon{
    width: 20px;
    height: 20px;
  }
  .flex_row{
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .flex_row_s{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  .flex_col{
    display: flex;
    flex-direction: column;
  }
  .align_center{
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
