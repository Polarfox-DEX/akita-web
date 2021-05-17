import { FunctionComponent, useState, useCallback } from 'react'
import { akita } from '../ethereum/akita'
import { useInterval } from '../ethereum/interval'
import { chainIdToText } from '../ethereum/const'
import { toCompactBalance, toCompactValue } from '../ethereum/formatter'
const CoinGecko = require('coingecko-api')

let window_: any = window

const CoinGeckoClient = new CoinGecko()

function isConnected() {
  return window_.ethereum.isConnected()
}

function hasWallet() {
  return window_.web3 || window_.ethereum
}

export const Header: FunctionComponent = () => {
  const [accounts, setAccounts] = useState([])
  const [chainId, setChainId] = useState(undefined)
  const [akitaBalance, setAkitaBalance] = useState(-1)
  const [akitaPrice, setAkitaPrice] = useState(-1)
  const [akitaValue, setAkitaValue] = useState(-1)
  const [loggedIn, setLoggedIn] = useState(false)
  const [loggingInOut, setLoggingInOut] = useState(false)

  const getAkitaPrice = async () => {
    if (akitaPrice === -1) {
      let akitaData = await CoinGeckoClient.coins.fetch('akita-inu', {})
      if (akitaData.data) {
        setAkitaPrice(akitaData.data.market_data.current_price.usd)
      }
    }
  }

  const getAccounts = useCallback(async () => {
    const accounts_ = await window_.ethereum.request({ method: 'eth_accounts' })

    setAccounts(accounts_)
  }, [])

  const requestAccounts = useCallback(async () => {
    const accounts_ = await window_.ethereum.request({ method: 'eth_requestAccounts' })

    setAccounts(accounts_)
  }, [])

  const getChainId = useCallback(async () => {
    var chainId_ = await window_.ethereum.request({ method: 'eth_chainId' })

    if (chainId_) {
      // Remove the '0x' at the start of the string
      chainId_ = chainId_.replace(/^0x/, '')
    }

    setChainId(chainId_)
  }, [])

  const getAkitaBalance = useCallback(async () => {
    if (accounts && accounts.length !== 0) {
      try {
        const akitaBalance_ = await akita(chainId).methods.balanceOf(accounts[0]).call()
        setAkitaBalance(akitaBalance_)
      } catch (error) {
        // This error is irrelevant and has no consequence on the behavior of the app
        if (!error.toString().startsWith("Error: Returned values aren't valid, did it run Out of Gas?"))
          console.error(error)
      }
    }
  }, [accounts, chainId])

  const getAkitaValue = useCallback(() => {
    if (akitaBalance !== -1 && akitaPrice !== -1) setAkitaValue(akitaBalance * akitaPrice)
    else return -1
  }, [akitaBalance, akitaPrice])

  async function connectWallet() {
    if (!loggingInOut) {
      setLoggingInOut(true)

      await requestAccounts()
      await getChainId()

      setLoggedIn(true)
      setLoggingInOut(false)
    }
  }

  const startUpChecks = async () => {
    if (hasWallet()) {
      const accounts_ = await window_.ethereum.request({ method: 'eth_accounts' })
      if (accounts_ && accounts_.length !== 0) {
        setAccounts(accounts_)
        setLoggedIn(true)
      }
    }
  }

  const updateCallbacks = useCallback(async () => {
    if (hasWallet()) {
      // Check if the user logged out
      if (!isConnected() || !accounts || accounts.length === 0) {
        setLoggedIn(false)
      } else if (isConnected() && loggedIn) {
        getAccounts()
        getChainId()
        getAkitaBalance()
        getAkitaValue()
      }
    }
  }, [getAccounts, getChainId, getAkitaBalance, getAkitaValue, loggedIn, accounts])

  startUpChecks()
  getAkitaPrice()
  // TODO: Is 500 a good number for this?
  useInterval(updateCallbacks, 500)

  const walletSection = () => {
    if (!hasWallet()) {
      return (
        <button
          // TODO: Redirect the user to Metamask.io
          onClick={() => console.log('TODO: redirect the user to Metamask.io')}
          disabled
          className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
        >
          Install Metamask
        </button>
      )
    }

    const buttonText = () => {
      if (!loggedIn) return 'Connect to a wallet'
      else if (accounts && accounts.length !== 0) return accounts[0]
      else return 'Loading...'
    }

    return (
      <button
        onClick={() => connectWallet()}
        disabled={loggingInOut}
        className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
      >
        {buttonText()}
      </button>
    )
  }

  const chainIdDisplay = () => {
    if (!loggedIn || !chainId) {
      return <div></div>
    }
    return (
      <div>
        <button
          disabled
          className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
        >
          {chainIdToText(chainId)}
        </button>
      </div>
    )
  }

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
    if (!loggedIn || !akitaBalance) {
      return <div>Log in with your wallet to see your AKITA balance here!</div>
    } else {
      return (
        <div className="flex space-x-4 ...">
          {/* <div className="flex-1 bg-orange-600 bg-opacity-50 ...">Your AKITA balance: {akitaBalance}</div>
          <div className="flex-1 bg-orange-600 bg-opacity-75 ...">Current AKITA price: {akitaPrice}$</div>
          <div className="flex-1 bg-orange-600 bg-opacity-100 ...">Current value: {akitaValue}$</div> */}

          {akitaCard(toCompactBalance(akitaBalance), ' AKITA', 'AKITA Balance')}
          {akitaCard(akitaPrice.toString(), '$', 'AKITA Price')}
          {akitaCard(toCompactValue(akitaValue), ' $', 'Wallet Value')}
        </div>
      )
    }
  }

  return (
    <div>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <img src="images/logo.png" alt="logo" />
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 uppercase hover:text-gray-900">Home</a>
            <a className="mr-5 uppercase hover:text-gray-900">News</a>
            <a className="mr-5 uppercase hover:text-gray-900">How To Buy</a>
          </nav>
          {walletSection()}
          {chainIdDisplay()}
        </div>
      </header>
      <header className="text-gray-600 body-font">{akitaBalanceDisplay()}</header>
    </div>
  )
}
