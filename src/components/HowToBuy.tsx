import { FunctionComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink, faCoins } from '@fortawesome/free-solid-svg-icons';

export const HowToBuy: FunctionComponent = () => (
  <section className="text-gray-600 body-font overflow-hidden text-left">
    <div className="container px-5 py-24 mx-auto">
      <div className="lg:w-5/5 flex flex-wrap">
        <img
          alt="uniswap"
          className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
          src="images/3A.png"
        />

        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 flex flex-col justify-center">
          <h1 className="text-gray-900 text-3xl title-font font-medium mb-5">
            How to buy on Uniswap
          </h1>
          <div className="mb-7">
            Make sure you paste in the correct address.
          </div>

          <div className="flex justify-start items-center mb-7 sm:flex-row flex-col">
            <div>
              <div className="flex justify-center items-center rounded-full h-16 w-16 text-2xl text-yellow-400 bg-opacity-10 bg-yellow-400">
                <FontAwesomeIcon icon={faLink} />
              </div>
            </div>
            <div className="pl-8 flex-grow sm:text-left mt-6 sm:mt-0">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                Connect your wallet & Swap ETH/AKITA
              </h2>
              <p className="leading-relaxed text-base">
                Make sure you adapt to price slippage and got enough ETH for the
                fees in your wallet.
              </p>
            </div>
          </div>
          <div className="flex justify-start items-center mb-7 sm:flex-row flex-col">
            <div>
              <div className="flex justify-center items-center rounded-full h-16 w-16 text-2xl text-blue-300 bg-opacity-10 bg-blue-300">
                <FontAwesomeIcon icon={faCoins} />
              </div>
            </div>
            <div className="pl-8 flex-grow sm:text-left mt-6 sm:mt-0">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
                Add liquidity
              </h2>
              <p className="leading-relaxed text-base">
                Would you like to add liquidity to Uniswap Pool? <br />
                Check the pair{' '}
                <a href="https://www.polarfox.io" target="blank">
                  here
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
