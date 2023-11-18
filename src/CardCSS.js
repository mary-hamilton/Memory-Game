import {css} from "@emotion/css";

export const containerCSS = css`
  height: 100%;
  aspect-ratio: 1/1;
  perspective: 30rem;
`
export const cardCSS = css`
  height: 100%;
  width: 100%;
  position: relative;
  transition: transform 0.5s;
  transform-style: preserve-3d;
`

export const isFlippedCSS = css`
  transform: rotateY(180deg);
`

export const frontCSS = css`
  height: 100%;
  width: 100%;
  position: absolute;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  backface-visibility: hidden;
`
const backCSS = css`
  background-color: pink;
  transform: rotateY(180deg);
  background-position: center;
  background-size: cover;
`
export const frontAndBack = [frontCSS, backCSS]