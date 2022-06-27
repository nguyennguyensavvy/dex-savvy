import tokens from 'config/constants/tokens'
import { getFullDisplayBalance } from 'utils/formatBalance'
import useTokenBalance from './useTokenBalance'

const useSVCTokenBalanceDisplay = () => {
  const { balance, fetchStatus } = useTokenBalance(tokens.svc.address)
  const balanceDisplay = getFullDisplayBalance(balance, 18, 3)
  return { balanceDisplay, fetchStatus }
}

export default useSVCTokenBalanceDisplay
