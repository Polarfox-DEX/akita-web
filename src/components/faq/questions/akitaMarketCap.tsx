const akitaMarketCap = (
  <>
    <p>
      Many indexes like CoinGecko and CoinMarketCap will not show the accurate market cap as they do not properly
      calculate our token metrics.
    </p>

    <br />

    <p>To get the market cap:</p>
    <ul className="list-disc ml-1 list-decimal list-inside">
      <li>
        Go to{' '}
        <a
          href="https://www.dextools.io/app/uniswap/pair-explorer/0xda3a20aad0c34fa742bd9813d45bbf67c787ae0b"
          target="blank"
          className="hover:text-gray-900"
        >
          DEXTools
        </a>
        ;
      </li>
      <li>Click on “View Market Cap”.</li>
    </ul>
  </>
)

export default akitaMarketCap
