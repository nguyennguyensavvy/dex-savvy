import React from "react";
import styled from "styled-components";
import { Colors } from "../../theme";
import Skeleton from "../Skeleton/Skeleton";
import { SVCLogo } from "../Svg";
import Text from "../Text/Text";

export interface Props {
  color?: keyof Colors;
  cakePriceUsd?: number;
  showSkeleton?: boolean;
  svcBalance?: number;
  svcFetchStatus: boolean;
}

const PriceLink = styled.a`
  display: flex;
  align-items: center;
  svg {
    transition: transform 0.3s;
  }
  :hover {
    svg {
      transform: scale(1.2);
    }
  }
`;

const CakePrice: React.FC<Props> = ({ svcBalance, svcFetchStatus, color = "textSubtle", showSkeleton = true }) => {
  return svcBalance ? (
    <PriceLink
      href="https://pancakeswap.finance/swap?outputCurrency=0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82"
      target="_blank"
    >
      {/* <LogoRound width="24px" mr="8px" /> */}
      <SVCLogo width="24px" mr="8px" />
      <Text color={color} bold>
        {svcBalance}
      </Text>
    </PriceLink>
  ) : showSkeleton ? (
    <Skeleton width={80} height={24} />
  ) : null;
};

export default React.memo(CakePrice);
