import Container from 'components/Layout/Container'
// eslint-disable-next-line import/named
import { Button, useModal } from '@pancakeswap/uikit'
import { PageMeta } from 'components/Layout/Page'
import GreySavvycoinIcon from 'components/Svg/GreySavvycoinIcon'
import SmsIcon from 'components/Svg/SmsIcon'
import { useEffect, useState } from 'react'
import { getSVCContract } from 'utils/contractHelpers'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import { getProviderOrSigner } from 'utils'
import { getDecimalAmount } from 'utils/formatBalance'
import BigNumber from 'bignumber.js'
import ConfirmModal from './ConfirmModal'
import { TransferBox } from './style'
import TransferHeader from './transferHeader'
import Notification from './Notification'

const Transfer = () => {
  const { account, library } = useActiveWeb3React()
  const [transferHash, setTransferHash] = useState<string>('')
  const [address, setAddress] = useState<string>('')
  const [amount, setAmount] = useState<string>('')
  const contract = getSVCContract(getProviderOrSigner(library, account))

  const transferHandler = async () => {
    const transferAmount = getDecimalAmount(new BigNumber(amount)).toString()
    const recieverAddress = address
    const txt = await contract.transfer(recieverAddress, transferAmount)

    setTransferHash(txt.hash)
  }

  useEffect(() => {
    if (transferHash) {
      onPresentSuccess()
      setAddress('')
      setAmount('')
    }
  }, [transferHash])

  const [onPresentConfirm] = useModal(<ConfirmModal address={address} amount={amount} onSubmit={transferHandler} />)
  const [onPresentSuccess] = useModal(<Notification txtHash={transferHash} />)

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
              <input
                type="text"
                className="abc"
                id="recieverAddress"
                placeholder="Input the address"
                onChange={(e) => setAddress(e.target.value)}
              />
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
              <input
                type="text"
                className="abc"
                id="sendAmount"
                placeholder="Input number of coin"
                onChange={(e) => setAmount(e.target.value)}
              />
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
