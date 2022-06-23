import styled from 'styled-components'

export const BannerBox = styled.div`
  position: relative;
  .about-box {
    display: flex;
    flex-direction: column;
    max-width: 592px;
    position: relative;
    z-index: 3;
    min-height: 60vh;
    margin-top: 60px;

    h1.hero-title {
      font-family: 'Space Grotesk';
      font-style: normal;
      font-weight: 600;
      font-size: 64px;
      line-height: 78px;
      color: #ffffff;
    }

    p.desc {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      color: rgba(255, 255, 255, 0.65);
    }
  }

  img.chainBanner {
    position: absolute;
    right: -200px;
    top: -150px;
    z-index: 2;
    max-width: 950px;
  }
`
