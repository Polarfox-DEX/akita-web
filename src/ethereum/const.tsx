export const ETHEREUM = '1'
export const GOERLI = '5'

export const AKITA_ADDRESS_ETHEREUM = '0x3301Ee63Fb29F863f2333Bd4466acb46CD8323E6'
export const AKITA_ADDRESS_GOERLI = '0x4cfbaE28B870F5f1F1BCbe6337a2BF67573a72ec'

export const PROVIDER_ETHEREUM = 'https://mainnet.infura.io/v3/418e2ad2a59645cab005c2a1712a1873'
export const PROVIDER_GOERLI = 'https://goerli.infura.io/v3/418e2ad2a59645cab005c2a1712a1873'

export const provider = (chainId: string | undefined) => {
  if (chainId === ETHEREUM) return PROVIDER_ETHEREUM
  else if (chainId === GOERLI) return PROVIDER_GOERLI
  else return PROVIDER_ETHEREUM
}

export const akitaAddress = (chainId: string | undefined) => {
  if (chainId === ETHEREUM) return AKITA_ADDRESS_ETHEREUM
  else if (chainId === GOERLI) return AKITA_ADDRESS_GOERLI
  else return AKITA_ADDRESS_ETHEREUM
}

export const chainIdToText = (chainId: string | undefined) => {
  if (chainId === ETHEREUM) return 'Ethereum'
  else if (chainId === GOERLI) return 'Goerli'
  else return 'Wrong Network'
}
