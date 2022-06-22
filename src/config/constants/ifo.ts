import { Token, ChainId } from '@pancakeswap/sdk'
import tokens from './tokens'
import farms from './farms'
import { Ifo } from './types'

// export const cakeBnbLpToken = new Token(ChainId.TESTNET, farms[1].lpAddresses[ChainId.TESTNET], 18, farms[1].lpSymbol)

const ifos: Ifo[] = [
  // {
  //   id: 'duet',
  //   address: '0xDF24BE326af4c1fb888f567f41D9a981A4752cf1',
  //   isActive: false,
  //   name: 'DUET',
  //   poolBasic: {
  //     saleAmount: '1,200,000 DUET',
  //     raiseAmount: '$360,000',
  //     cakeToBurn: '$0',
  //     distributionRatio: 0.2,
  //   },
  //   poolUnlimited: {
  //     saleAmount: '4,800,000 DUET',
  //     raiseAmount: '$1,440,000',
  //     cakeToBurn: '$0',
  //     distributionRatio: 0.8,
  //   },
]

export default ifos
