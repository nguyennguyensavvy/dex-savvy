import Container from 'components/Layout/Container'
import React from 'react'
import CurrencyInputHeader from 'views/Swap/components/CurrencyInputHeader'
// eslint-disable-next-line import/named
import { Text, Flex, CardBody, CardFooter, Button, AddIcon, useModal } from '@pancakeswap/uikit'
import SmsIcon from 'components/Svg/SmsIcon'
import GreySavvycoinIcon from 'components/Svg/GreySavvycoinIcon'
import TransferHeader from './transferHeader'
import { TransferBox } from './style'
import ConfirmModal from './ConfirmModal'

const Transfer = () => {
  const [onPresentConfirm] = useModal(<ConfirmModal />)
  return (
    <Container>
      <TransferBox>
        <TransferHeader />
        <div className="receive-address">
          <div className="receive-title">
            <div className="icon">
              <SmsIcon />
            </div>
            <div className="p">Receiver address</div>
          </div>
          <div className="receive-input">
            <input type="text" className="abc" placeholder="Input the address" />
          </div>
        </div>

        <div className="receive-address">
          <div className="receive-title">
            <div className="icon">
              <GreySavvycoinIcon />
            </div>
            <div className="p">Amount</div>
          </div>
          <div className="receive-input">
            <input type="text" className="abc" placeholder="Input number of coin" />
          </div>
        </div>

        <div className="button">
          <Button width="100%" onClick={onPresentConfirm}>
            Confirm
          </Button>
        </div>
      </TransferBox>
    </Container>
  )
}

export default Transfer
