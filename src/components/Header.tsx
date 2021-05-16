import { FunctionComponent, useState, useCallback } from 'react'
import { akita } from '../ethereum/akita'
import { useInterval } from '../ethereum/interval'
import { chainIdToText } from '../ethereum/const'

let window_: any = window

function isConnected() {
  return window_.ethereum.isConnected()
}

function hasWallet() {
  return window_.web3 || window_.ethereum
}

export const Header: FunctionComponent = () => {
  const [accounts, setAccounts] = useState([])
  const [chainId, setChainId] = useState(undefined)
  const [akitaBalance, setAkitaBalance] = useState(undefined)
  const [loggedIn, setLoggedIn] = useState(false)
  const [loggingInOut, setLoggingInOut] = useState(false)

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

    if (typeof chainId_ !== undefined) {
      // Remove the '0x' at the start of the string
      chainId_ = chainId_.replace(/^0x/, '')
    }

    setChainId(chainId_)
  }, [])

  const getAkitaBalance = useCallback(async () => {
    if (typeof accounts !== undefined && accounts.length !== 0) {
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
      if (typeof accounts_ !== undefined && accounts_.length !== 0) {
        setAccounts(accounts_)
        setLoggedIn(true)
      }
    }
  }

  const updateCallbacks = useCallback(async () => {
    if (hasWallet()) {
      // Check if the user logged out
      if (!isConnected() || typeof accounts === undefined || accounts.length === 0) {
        setLoggedIn(false)
      } else if (isConnected() && loggedIn) {
        getAccounts()
        getChainId()
        getAkitaBalance()
      }
    }
  }, [getAccounts, getChainId, getAkitaBalance, loggedIn, accounts])

  startUpChecks()
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
      else if (typeof accounts !== undefined && accounts.length !== 0) return accounts[0]
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
    if (!loggedIn || typeof chainId === undefined) {
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

  const akitaBalanceDisplay = () => {
    if (!loggedIn || typeof akitaBalance === undefined) {
      return <div>Log in with your wallet to see your AKITA balance here!</div>
    } else {
      return (
        <div>
          Your AKITA balance: {akitaBalance}
          Current AKITA price: {1234}
          Current value: {5678}$
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
      <div>
        {akitaBalanceDisplay()}
      </div>
    </div>
  )
}
