import { css } from "@emotion/react";

export const globalStyles = css`
  * {
    margin: 0;
    box-sizing: border-box;
  }

  @font-face {
    font-family: "myfont";
    src: url("/fonts/Windows Regular.ttf");
  }
  
  @font-face {
    font-family: "myfontko";
    src: url("/fonts/DungGeunMo.ttf");
  }
`;
