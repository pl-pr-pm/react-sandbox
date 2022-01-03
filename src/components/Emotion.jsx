/** @jsxRuntime classic */
/** @jsx  jsx*/
import { jsx, css } from "@emotion/react";

export const Emotion = () => {
  const conatinerStyle = css`
    background-color: yellow;
    border: solid;
    border-radius: 15px;
    padding: 10px;
    margin: 8px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  `;

  return (
    <div css={conatinerStyle}>
      <p>Emotion Styles</p>
      <button>FIGHT</button>
    </div>
  );
};
