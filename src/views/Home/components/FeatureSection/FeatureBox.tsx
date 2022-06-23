import TransparentIcon from 'components/Svg/TransparentIcon'
import React from 'react'
import styled from 'styled-components'

const StyledFeatureBox = styled.div`
  width: 30%;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 32px;
  padding: 24px;

  .icon {
    display: flex;
    justify-content: flex-end;
  }

  .info {
    h4.title {
      font-family: 'Space Grotesk';
      font-weight: 600;
      font-size: 32px;
      line-height: 36px;
      color: #f6b24f;
    }

    p.desc {
      margin-top: 8px;
      font-family: 'Inter';
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      color: rgba(255, 255, 255, 0.65);
    }
  }
`

type Props = {
  title: string
}

const FeatureBox = (props: Props) => {
  return (
    <StyledFeatureBox>
      <div className="icon">
        <TransparentIcon />
      </div>

      <div className="info">
        <h4 className="title">Transparent</h4>
        <p className="desc">The data is embedded in the network as a block, public.</p>
      </div>
    </StyledFeatureBox>
  )
}

export default FeatureBox
