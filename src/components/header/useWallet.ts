import { useCallback, useState } from 'react'
import { ChainId } from '../../ethereum/const'
import { useInterval } from '../../hooks/useInterval'
import { akita } from '../../ethereum/akita'

const window_: any = window

function hasWallet() {
  return window_.web3 || window_.ethereum
}

function getAccounts(): Promise<string[]> {
  return window_.ethereum.request({ method: 'eth_accounts' })
}

function requestAccounts(): Promise<string[]> {
  return window_.ethereum.request({ method: 'eth_requestAccounts' })
}

async function getChainId(): Promise<ChainId | undefined> {
  const chainId_ = await window_.ethereum.request({ method: 'eth_chainId' })

  if (chainId_) {
    // Hex to base 10
    return parseInt(chainId_)
  }
}

export interface Wallet {
  hasWallet: boolean
  connected: boolean
  chainId: ChainId | null
  accounts: string[]
  akitaBalance: number
  requestConnection: () => void
}

export function useWallet(): Wallet {
  const [chainId, setChainId] = useState<ChainId | null>(null)
  const [accounts, setAccounts] = useState<string[]>([])
  const [connected, setConnected] = useState<boolean>(false)
  const [akitaBalance, setAkitaBalance] = useState<number>(0)

  const connectAccount = useCallback((accounts: string[], chainId?: ChainId) => {
    if (accounts.length > 0 && chainId) {
      setAccounts(accounts)
      setChainId(chainId)
      setConnected(true)

      try {
        akita(chainId).methods.balanceOf(accounts[0]).call().then(setAkitaBalance)
      } catch (error) {
        // This error is irrelevant and has no consequence on the behavior of the app
        if (!error.toString().startsWith("Error: Returned values aren't valid, did it run Out of Gas?"))
          console.error(error)
      }
    }
  }, [])

  useInterval({
    callback: async () => {
      // If chain changed
      const currentChainId = await getChainId()
      if (currentChainId !== chainId) {
        connectAccount(await getAccounts(), currentChainId)
      }
      // If disconnected
      if (connected && hasWallet() && (await getAccounts()).length === 0) {
        setConnected(false)
        setAccounts([])
        setAkitaBalance(0)
      }
    },
    delay: 500,
    leading: true,
  })

  async function requestConnection() {
    if (!connected) {
      const [accounts, chainId] = await Promise.all([requestAccounts(), getChainId()])
      connectAccount(accounts, chainId)
    }
  }

  return {
    hasWallet: hasWallet(),
    connected,
    chainId,
    accounts,
    akitaBalance,
    requestConnection,
  }
}
