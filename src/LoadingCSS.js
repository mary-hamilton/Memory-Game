import {css, keyframes} from "@emotion/css";

export const scrollContainerCSS = css`
  
        display: flex;
        width: 80%;
        min-width: 55vh;
        aspect-ratio: 1/1;
        overflow: hidden;
`
// TODO change this to blinking text
export const textScroll = keyframes`
        from
        {transform: translateX(-50%)}
        to
        {transform: translateX(300%)}
    `

export const scrollTextCSS = css`
        font-size: 4vh;
        animation: ${textScroll} 5s linear infinite;
    `

