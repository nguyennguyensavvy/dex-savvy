import Container from 'components/Layout/Container'
// eslint-disable-next-line import/named
import { Button, useModal } from '@pancakeswap/uikit'
import { PageMeta } from 'components/Layout/Page'
import GreySavvycoinIcon from 'components/Svg/GreySavvycoinIcon'
import SmsIcon from 'components/Svg/SmsIcon'
import ConfirmModal from './ConfirmModal'
import { TransferBox } from './style'
import TransferHeader from './transferHeader'

const Transfer = () => {
  const [onPresentConfirm] = useModal(<ConfirmModal />)
  return (
    <>
      <PageMeta />
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
    </>
  )
}

export default Transfer
