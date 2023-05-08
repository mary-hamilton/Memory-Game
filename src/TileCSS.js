import {css} from "@emotion/css";


export const containerCSS = css`
      height: 100px;
      width: 100px;
      perspective: 1000px;
    `
export const tileCSS = css`
      height: 100%;
      width: 100%;
      position: relative;
      transition: transform 0.5s;
      transform-style: preserve-3d;
      `

export const isFlipped = css`
      height: 100%;
      width: 100%;
      position: relative;
      transition: transform 0.5s;
      transform-style: preserve-3d;
      transform: rotateX(180deg);
    `

export const otherIsFlipped = css`
      height: 100%;
      width: 100%;
      position: relative;
      transition: transform 0.5s;
      transform-style: preserve-3d;
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
export const backCSS = css`
      background-color: pink;
      height: 100%;
      width: 100%;
      position: absolute;
      border-radius: 5px;
      display: flex;
      justify-content: center;
      align-items: center;
      backface-visibility: hidden;
      transform: rotateX(180deg)
    `

export const otherBackCSS = css`
      background-color: pink;
      height: 100%;
      width: 100%;
      position: absolute;
      border-radius: 5px;
      display: flex;
      justify-content: center;
      align-items: center;
      backface-visibility: hidden;
      transform: rotateY(180deg)
    `