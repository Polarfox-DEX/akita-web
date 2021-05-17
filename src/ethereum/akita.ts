import { web3 } from './web3'
import { AbiItem } from 'web3-utils'
import { AKITA_ADDRESS, ChainId } from './const'
import * as Akita from './build/Akita.json'

export const akita = (chainId: ChainId) => {
  return new web3.eth.Contract(Akita.abi as AbiItem[], AKITA_ADDRESS[chainId])
}
