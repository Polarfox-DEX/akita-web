import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink, faCoins } from '@fortawesome/free-solid-svg-icons'

export function HowToBuy() {
  return (
    <section id="how-to-buy" className="container px-5 mx-auto mt-24 overflow-hidden text-left">
      <div className="lg:w-5/5 flex flex-wrap px-4">
        <div className="lg:w-1/2 flex justify-center items-center">
          <img alt="uniswap" className=" lg:h-auto rounded" src="images/3A.png" />
        </div>

        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 flex flex-col justify-center">
          <h1 className="mb-5">How to buy on Uniswap</h1>
          <div className="mb-7">
            Make sure you paste in the correct{' '}
            <a href="https://etherscan.io/token/0x3301ee63fb29f863f2333bd4466acb46cd8323e6" target="blank" className="hover:text-gray-900">
              address
            </a>
            .
          </div>

          <div className="flex justify-start items-center mb-7 sm:flex-row flex-col">
            <div>
              <div className="flex justify-center items-center rounded-full h-16 w-16 text-2xl text-yellow-500 bg-opacity-10 bg-yellow-500">
                <FontAwesomeIcon icon={faLink} />
              </div>
            </div>
            <div className="pl-8 flex-grow sm:text-left mt-6 sm:mt-0">
              <h2 className="mb-2">Connect your wallet & Swap ETH/AKITA</h2>
              <p>Make sure you adapt to price slippage and got enough ETH for the fees in your wallet.</p>
            </div>
          </div>
          <div className="flex justify-start items-center mb-7 sm:flex-row flex-col">
            <div>
              <div className="flex justify-center items-center rounded-full h-16 w-16 text-2xl text-blue-300 bg-opacity-10 bg-blue-300">
                <FontAwesomeIcon icon={faCoins} />
              </div>
            </div>
            <div className="pl-8 flex-grow sm:text-left mt-6 sm:mt-0">
              <h2 className="mb-2">Add liquidity</h2>
              <p>
                Would you like to add liquidity to Uniswap Pool? <br />
                Check the pair{' '}
                <a href="https://www.polarfox.io" target="blank" className="hover:text-gray-900">
                  here
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
