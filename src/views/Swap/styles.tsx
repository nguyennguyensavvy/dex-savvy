import { Box, Flex } from '@pancakeswap/uikit'
import styled from 'styled-components'

export const StyledSwapContainer = styled(Flex)<{ $isChartExpanded: boolean }>`
  flex-shrink: 0;
  height: fit-content;

  ${({ theme }) => theme.mediaQueries.lg} {
    padding-left: 40px;
  }
`

export const StyledInputCurrencyWrapper = styled(Box)``
