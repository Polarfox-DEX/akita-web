import { web3 } from './web3'
import { AbiItem } from 'web3-utils'
import { akitaAddress } from './const'
const Akita = require('./build/Akita.json')

export const akita = (chainId: string | undefined) => {
  return new web3.eth.Contract(Akita.abi as AbiItem[], akitaAddress(chainId))
}