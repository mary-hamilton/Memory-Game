import {css, keyframes} from "@emotion/css";

export const scrollContainerCSS = css`
        display: flex;
        width: 20vh;
        min-height: 4vh;
        overflow: hidden;
        margin: 2vh 0 3vh 3vh;
`

export const textScroll = keyframes`
        from
        {transform: translateX(-100%)}
        to
        {transform: translateX(300%)}
    `

export const scrollTextCSS = css`
        font-size: 4vh;
        animation: ${textScroll} 3s linear infinite;
        color: inherit;
    `

