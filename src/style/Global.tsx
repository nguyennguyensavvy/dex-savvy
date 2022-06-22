import { createGlobalStyle } from 'styled-components'
import { PancakeTheme } from '@pancakeswap/uikit'

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends PancakeTheme {}
}

const GlobalStyle = createGlobalStyle`

@font-face {
    font-family: 'Inter';
    src: url('/fonts/Inter/Inter-Medium.ttf') format('truetype');
    font-weight: 500;
    font-style: normal;
}

@font-face {
    font-family: 'Inter';
    src: url('/fonts/Inter/Inter-Regular.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
}

@font-face {
    font-family: 'Space Grotesk';
    src:url('/fonts/SpaceGrotesk/SpaceGrotesk-Regular.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
}

@font-face {
    font-family: 'Space Grotesk';
    src: url('/fonts/SpaceGrotesk/SpaceGrotesk-Medium.ttf');
    font-weight: 500;
    font-style: normal;
}

@font-face {
    font-family: 'Space Grotesk';
    src: url('/fonts/SpaceGrotesk/SpaceGrotesk-SemiBold.ttf') format('truetype');
    font-weight: 600;
    font-style: normal;
}


@font-face {
    font-family: 'Space Grotesk';
    src: url('/fonts/SpaceGrotesk/SpaceGrotesk-Bold.ttf') format('truetype');
    font-weight: 700;
    font-style: normal;
}
  * {
    font-family: 'Inter', sans-serif;
  }
  body {
    background-color: ${({ theme }) => theme.colors.background};

    img {
      height: auto;
      max-width: 100%;
    }
  }
`

export default GlobalStyle
