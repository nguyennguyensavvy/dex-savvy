import { Modal } from '@pancakeswap/uikit'
import SuccessIconVector from 'components/Svg/SuccessIconVector'
import React from 'react'
import { NotificationBox } from './style'

interface Props {
  onDismiss?: () => void
  txtHash: string
}

const Notification: React.FC<Props> = ({ onDismiss, txtHash }) => {
  return (
    <Modal title="Notification" onDismiss={onDismiss}>
      <NotificationBox>
        <div className="success-icon">
          <SuccessIconVector />
        </div>
        <p style={{ fontSize: '20px' }}>Send gift successful</p>
        <a href={`https://testnet.bscscan.com/tx/${txtHash}`} style={{ color: '#F6B24F' }}>
          View on BsCScan
        </a>
        <button className="button-notification" onClick={() => onDismiss()} type="button">
          Close
        </button>
      </NotificationBox>
    </Modal>
  )
}

export default Notification
