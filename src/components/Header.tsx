import { FunctionComponent, useState, useEffect } from 'react'
import { akita } from '../ethereum/akita'
import { useInterval } from '../hooks/useInterval'
import { ChainId, CHAIN_NAME } from '../ethereum/const'
import { toCompactBalance, toCompactValue } from '../ethereum/formatter'
import { Link, withRouter } from 'react-router-dom'
const CoinGecko = require('coingecko-api')

let window_: any = window

const CoinGeckoClient = new CoinGecko()

function isConnected() {
  return window_.ethereum.isConnected()
}

function hasWallet() {
  return window_.web3 || window_.ethereum
}

async function getAkitaPrice(): Promise<number | null> {
  const akitaData = await CoinGeckoClient.coins.fetch('akita-inu', {})

  return akitaData?.data.market_data?.current_price?.usd
}

function getAccounts(): Promise<string[]> {
  return window_.ethereum.request({ method: 'eth_accounts' })
}

function requestAccounts(): Promise<string[]> {
  return window_.ethereum.request({ method: 'eth_requestAccounts' })
}

async function getChainId(): Promise<number | null> {
  const chainId_ = await window_.ethereum.request({ method: 'eth_chainId' })

  if (chainId_) {
    // Hew to base 10
    return parseInt(chainId_)
  }

  return null
}

const Header: FunctionComponent = () => {
  const [accounts, setAccounts] = useState<string[]>([])
  const [chainId, setChainId] = useState<ChainId | null>(null)
  const [akitaBalance, setAkitaBalance] = useState<number | null>(null)
  const [akitaPrice, setAkitaPrice] = useState<number | null>(null)
  const [akitaValue, setAkitaValue] = useState<number | null>(null)
  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    ;(async () => {
      const price = await getAkitaPrice()
      setAkitaPrice(price)
    })()
  }, [])

  useEffect(() => {
    ;(async () => {
      if (hasWallet()) {
        const accounts_ = await window_.ethereum.request({ method: 'eth_accounts' })
        if (accounts_ && accounts_.length !== 0) {
          setAccounts(accounts_)
          setLoggedIn(true)
        }
      }
    })()
  }, [])

  const getAkitaBalance = async (): Promise<number | null> => {
    if (accounts && accounts.length !== 0 && chainId) {
      try {
        return await akita(chainId).methods.balanceOf(accounts[0]).call()
      } catch (error) {
        // This error is irrelevant and has no consequence on the behavior of the app
        if (!error.toString().startsWith("Error: Returned values aren't valid, did it run Out of Gas?"))
          console.error(error)
      }
    }

    return null
  }

  const getAkitaValue = () => {
    if (akitaBalance && akitaPrice) return akitaBalance * akitaPrice
    else return 0
  }

  async function connectWallet() {
    if (!loggedIn) {
      const [accounts, chainId] = await Promise.all([requestAccounts(), getChainId()])
      if (accounts) setAccounts(accounts)
      if (chainId) setChainId(chainId)

      setLoggedIn(true)
    }
  }

  useInterval(
    async () => {
      if (hasWallet()) {
        // Check if the user logged out
        if (!isConnected() || !accounts || accounts.length === 0) {
          setLoggedIn(false)
        } else if (isConnected() && loggedIn) {
          const accounts = await getAccounts()
          if (accounts) setAccounts(accounts)

          setChainId(await getChainId())

          const akitaBalance = await getAkitaBalance()
          if (akitaBalance) setAkitaBalance(akitaBalance)

          setAkitaValue(getAkitaValue())
        }
      }
    },
    2500,
    true
  )

  const akitaCard = (balance: string, currency: string, description: string) => {
    return (
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <div className="p-6">
            <div className="grid grid-cols-1 divide-y divide-gray-600">
              <div>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  {balance === '-1' ? '...' : balance + currency}
                </h1>
              </div>
              <div>
                <p className="leading-relaxed mb-3">{description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const akitaBalanceDisplay = () => {
    if (!loggedIn) {
      return <div>Log in with your wallet to see your AKITA balance here!</div>
    } else {
      return (
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          {akitaCard(toCompactBalance(akitaBalance ?? 0), ' AKITA', 'AKITA Balance')}
          {akitaCard((akitaPrice ?? 0).toString(), '$', 'AKITA Price')}
          {akitaCard(toCompactValue(akitaValue ?? 0), ' $', 'Wallet Value')}
        </div>
      )
    }
  }

  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <img src="images/logo.png" alt="logo" />
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link className="mr-5 uppercase hover:text-gray-900" to="/">
            Home
          </Link>
          <div className="mr-5 uppercase hover:text-gray-900">
            <a href="/#news">News</a>
          </div>
          <div className="mr-5 uppercase hover:text-gray-900">
            <a href="/#how-to-buy">How To Buy</a>
          </div>
          <Link className="mr-5 uppercase hover:text-gray-900" to="/faq">
            FAQ
          </Link>
        </nav>
        {loggedIn && chainId ? (
          <WalletInfo address={accounts[0]} network={CHAIN_NAME[chainId]} />
        ) : (
          <ConnectButton hasWallet={hasWallet()} onClick={connectWallet} />
        )}
      </div>
      {akitaBalanceDisplay()}
    </header>
  )
}

function ConnectButton({ hasWallet, onClick }: { hasWallet: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      disabled={!hasWallet}
      className="inline-flex items-center bg-yellow-500 hover:bg-yellow-600 border-0 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0"
    >
      {hasWallet ? 'Connect to a wallet' : 'Install Metamask'}
    </button>
  )
}

function WalletInfo({ address, network }: { address: string; network: string }) {
  if (!address) return null
  return (
    <div className="text-yellow-500 border-yellow-500 border-2 rounded py-1 px-3 ">
      {address} - {network}
    </div>
  )
}

export default withRouter(Header)
