import { FunctionComponent } from 'react';
import classnames from 'classnames';

import './FirstTime.scss';

export interface FirstTimeProps {
  className?: string;
}

export const FirstTime: FunctionComponent<FirstTimeProps> = ({ className }) => (
  <section className={classnames('container px-5 mx-auto', className)}>
    <h1 className="mb-4">First time?</h1>
    <p>
      This is a step by step instruction on how to buy AKITA INU with Metamask.
    </p>
    <div className="flex flex-wrap pt-12">
      <div className="p-4 md:w-1/3">
        <div className="first-time-block py-7 px-8 h-full border-2 border-gray-200 border-opacity-60 rounded-sm overflow-hidden flex flex-col">
          <div className="flex justify-center mb-7">
            <img src="images/first-time/1.png" alt="Metamask icon" />
          </div>
          <h3 className="mb-6">1 - Download Metamask</h3>
          <div className="flex flex-col flex-grow justify-center items-center">
            <p className="mb-3">
              Go to{' '}
              <a href="https://metamask.io/download.html" target="blank">
                Metamask
              </a>{' '}
              and load the app. Follow the in-app-tutorial, log in and get
              started.
            </p>
            <p>
              Don't forget to write down your private pass-phrase (don't lose
              it!).
            </p>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="first-time-block py-7 px-8 h-full border-2 border-gray-200 border-opacity-60 rounded-sm overflow-hidden flex flex-col">
          <div className="flex justify-center mb-7">
            <img src="images/first-time/2.png" alt="Metamask icon" />
          </div>
          <h3 className="mb-6">2 - Buy Ethereum</h3>
          <div className="flex flex-row flex-grow justify-center items-center">
            <p>Get some ETH at your preferred exchange.</p>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="first-time-block py-7 px-8 h-full border-2 border-gray-200 border-opacity-60 rounded-sm overflow-hidden flex flex-col">
          <div className="flex justify-center mb-7">
            <img src="images/first-time/3.png" alt="Metamask icon" />
          </div>
          <h3 className="mb-6">3 - Transfer to Metamask</h3>
          <div className="flex flex-col flex-grow justify-center items-center">
            <p>Copy your Metamask address and transfer ETH to your wallet.</p>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="first-time-block py-7 px-8 h-full border-2 border-gray-200 border-opacity-60 rounded-sm overflow-hidden flex flex-col">
          <div className="flex justify-center mb-7">
            <img src="images/first-time/4.png" alt="Metamask icon" />
          </div>
          <h3 className="mb-6">4 - Connect to Uniswap</h3>
          <div className="flex flex-grow justify-center items-center">
            <p className="leading-relaxed">
              Find the official AKITA contract address{' '}
              <a
                href="https://etherscan.io/token/0x3301ee63fb29f863f2333bd4466acb46cd8323e6"
                target="blank"
              >
                here
              </a>{' '}
              (copy contract on top right corner) and connect your wallet to{' '}
              <a href="https://app.uniswap.org/#/swap" target="blank">
                Uniswap
              </a>
              .
            </p>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="first-time-block py-7 px-8 h-full border-2 border-gray-200 border-opacity-60 rounded-sm overflow-hidden flex flex-col">
          <div className=" flex justify-center mb-7">
            <img src="images/first-time/5.png" alt="Metamask icon" />
          </div>
          <h3 className="mb-6">5 - Swap</h3>
          <div className="flex flex-col flex-grow justify-center items-center">
            <p className="mb-3">
              Select From: <strong>ETH</strong>; To: Paste in official AKITA
              contract adress and click import.
            </p>
            <p>
              Put in the ETH-amount you wish to swap. Make sure you got enough
              ETH for the transaction fee (edit the fee to make sure transaction
              runs smoothly).
            </p>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="first-time-block py-7 px-8 h-full border-2 border-gray-200 border-opacity-60 rounded-sm overflow-hidden flex flex-col">
          <div className="flex justify-center mb-7">
            <img src="images/first-time/6.png" alt="Metamask icon" />
          </div>
          <h3 className="mb-6">6 - Add liquidity</h3>{' '}
          <div className="flex flex-col flex-grow justify-center items-center">
            <p>
              If you wish, add liquidity to the{' '}
              <a
                href="https://info.uniswap.org/#/tokens/0x3301ee63fb29f863f2333bd4466acb46cd8323e6"
                target="blank"
              >
                ETH-AKITA
              </a>{' '}
              pair on Uniswap.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);
