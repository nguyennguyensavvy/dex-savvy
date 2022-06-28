import { HistoryIcon } from '@pancakeswap/uikit'

// eslint-disable-next-line import/named
import { TransferHeaderStyle } from './style'

const TransferHeader = () => {
  return (
    <TransferHeaderStyle>
      <p className="transfer-title">Send gift</p>
      <p className="transfer-sub-title">Sent to your love ❤️</p>
      <div className="icon">
        <HistoryIcon />
      </div>
      <hr />
    </TransferHeaderStyle>
  )
}

export default TransferHeader
