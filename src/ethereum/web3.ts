import Web3 from 'web3'
import { PROVIDER, ChainId } from './const'

let web3_: Web3

// Running in browser AND Metamask is available
if (window && (window as any).ethereum) {
  // Get Metamask's instance of Web3
  web3_ = new Web3((window as any).ethereum)
}

// Running in server OR no Metamask
else {
  const newProvider = new Web3.providers.HttpProvider(PROVIDER[ChainId.ETHEREUM])
  web3_ = new Web3(newProvider)
}

export const web3: Web3 = web3_
