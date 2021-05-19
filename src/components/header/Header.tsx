import { useState } from 'react'
import { useInterval } from '../../hooks/useInterval'
import { CHAIN_NAME } from '../../ethereum/const'
import { toCompactBalance, toCompactValue } from '../../ethereum/formatter'
import { Link, withRouter } from 'react-router-dom'
import { useWallet } from './useWallet'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoins, faDollarSign, faWallet, IconDefinition } from '@fortawesome/free-solid-svg-icons'
const CoinGecko = require('coingecko-api')

const CoinGeckoClient = new CoinGecko()

async function getAkitaPrice(): Promise<number> {
  const akitaData = await CoinGeckoClient.coins.fetch('akita-inu', {})

  return akitaData?.data.market_data?.current_price?.usd ?? 0
}

export function Header() {
  const { hasWallet, connected, chainId, accounts, akitaBalance, requestConnection } = useWallet()
  const [akitaPrice, setAkitaPrice] = useState<number>(0)

  // Update akita price every 10 seconds
  useInterval({
    callback: () => {
      getAkitaPrice().then(setAkitaPrice)
    },
    delay: 10000,
    leading: true,
  })

  const computeAkitaValue = () => akitaBalance * akitaPrice

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
        {connected && chainId ? (
          <WalletInfo address={accounts[0]} network={CHAIN_NAME[chainId] ? CHAIN_NAME[chainId] : 'Wrong Network'} />
        ) : (
          <ConnectButton hasWallet={hasWallet} onClick={requestConnection} />
        )}
      </div>
      {connected ? (
        <AkitaBalanceDisplay akitaBalance={akitaBalance} akitaPrice={akitaPrice} akitaValue={computeAkitaValue()} />
      ) : (
        <div>✨✨✨ Log in with your wallet to see your AKITA balance here! ✨✨✨</div>
      )}
    </header>
  )
}

function ConnectButton({ hasWallet, onClick }: { hasWallet: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      disabled={!hasWallet}
      className="inline-flex items-center bg-yellow-500 hover:bg-yellow-600 py-1 px-3 focus:outline-none rounded-md text-base mt-4 md:mt-0"
    >
      {hasWallet ? 'Connect to a wallet' : 'Install Metamask'}
    </button>
  )
}

function WalletInfo({ address, network }: { address: string; network: string }) {
  if (!address) return null
  return (
    <div className="bg-yellow-500 rounded-md py-1 px-3 text-gray-900">
      {address} - {network}
    </div>
  )
}

function AkitaBalanceDisplay({
  akitaBalance,
  akitaPrice,
  akitaValue,
}: {
  akitaBalance: number
  akitaPrice: number
  akitaValue: number
}) {
  const akitaCard = (balance: string, currency: string, description: string, icon: IconDefinition) => {
    return (
      <div className="flex-grow flex justify-center items-center">
        <div className="bg-yellow-500 p-3 rounded-lg text-gray-900 font-medium">
          <div className="mb-2">
            <FontAwesomeIcon icon={icon} className="mr-3" />
            {description}
            <FontAwesomeIcon icon={icon} className="ml-3" />
          </div>
          {balance}
          {currency}
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row justify-center items-center">
      {akitaCard(toCompactBalance(akitaBalance), ' AKITA', 'Balance', faCoins)}
      {akitaCard(akitaPrice.toString(), ' $', 'Price', faDollarSign)}
      {akitaCard(toCompactValue(akitaValue), ' $', 'Wallet Value', faWallet)}
    </div>
  )
}

export default withRouter(Header)
