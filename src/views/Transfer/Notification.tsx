import { Button, CloseIcon, Modal } from '@pancakeswap/uikit'
import { ModalActions } from 'components/Modal'
import MetamaskLoIcon from 'components/Svg/MetamaskLoIcon'
import SuccessIconVector from 'components/Svg/SuccessIconVector'
import { useTranslation } from 'contexts/Localization'
import React from 'react'
import { NotificationBox } from './style'

interface Props {
  onDismiss?: () => void
}

const Notification: React.FC<Props> = ({ onDismiss }) => {
  return (
    <Modal title="Notification" onDismiss={onDismiss}>
      <NotificationBox>
        <div className="success-icon">
          <SuccessIconVector />
        </div>
        <p style={{ fontSize: '20px' }}>Send gift successful</p>
        <p style={{ color: '#F6B24F' }}>View on BsCScan</p>
        <div className="btn-addto-metamask">
          <p>Add BUSD to Metamask</p>
          <MetamaskLoIcon />
        </div>

        <button className="button-notification" onClick={() => onDismiss()} type="button">
          Close
        </button>
      </NotificationBox>
    </Modal>
  )
}

export default Notification
