import { Button, CloseIcon, Modal, useModal } from '@pancakeswap/uikit'
import { ModalActions } from 'components/Modal'
import { useTranslation } from 'contexts/Localization'
import React from 'react'
import GreenSavvycoinIcon from 'components/Svg/GreenSavvycoinIcon'
import { ConfirmModalBox } from './style'
import Notification from './Notification'
// eslint-disable-next-line import/order

interface Props {
  onDismiss?: () => void
}
const ConfirmModal: React.FC<Props> = ({ onDismiss }) => {
  const [onPresentConfirm] = useModal(<Notification />)
  return (
    <Modal title="Confirm Gift" onDismiss={onDismiss}>
      <ConfirmModalBox>
        <div className="confirm-item">
          <div className="item-left">
            <p>Email</p>
          </div>
          <div className="item-right">
            <p>hieu.tran@savvycomsoftware.com</p>
          </div>
        </div>
        <div className="confirm-item">
          <div className="item-left">
            <p>Wallet Address</p>
          </div>
          <div className="item-right">
            <p>0xsk23...0fg</p>
          </div>
        </div>
        <div className="confirm-item">
          <div className="item-left">
            <p>Amount</p>
          </div>
          <div className="item-right" style={{ color: '#00CB65' }}>
            <div className="icon">
              <GreenSavvycoinIcon />
            </div>
            <p>800</p>
          </div>
        </div>
        <div className="button-confirm">
          <Button width="100%" onClick={onPresentConfirm}>
            Confirm
          </Button>
        </div>
      </ConfirmModalBox>
    </Modal>
  )
}

export default ConfirmModal
