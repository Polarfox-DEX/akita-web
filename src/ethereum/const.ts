export enum ChainId {
  ETHEREUM = 1,
  GOERLI = 5,
}

export const CHAIN_NAME: { [chainId in ChainId]: string } = {
  [ChainId.ETHEREUM]: 'Ethereum',
  [ChainId.GOERLI]: 'Goerli',
}

export const PROVIDER: { [chainId in ChainId]: string } = {
  [ChainId.ETHEREUM]: 'https://mainnet.infura.io/v3/418e2ad2a59645cab005c2a1712a1873',
  [ChainId.GOERLI]: 'https://goerli.infura.io/v3/418e2ad2a59645cab005c2a1712a1873',
}

export const AKITA_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.ETHEREUM]: '0x3301Ee63Fb29F863f2333Bd4466acb46CD8323E6',
  [ChainId.GOERLI]: '0x4cfbaE28B870F5f1F1BCbe6337a2BF67573a72ec',
}

export const NetworkContextName = 'NETWORK'
