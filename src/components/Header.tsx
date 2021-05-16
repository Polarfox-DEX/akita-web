import { FunctionComponent } from 'react';

export const Header: FunctionComponent = () => (
  <header className="text-gray-600 body-font">
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <img src="images/logo.png" alt="logo" />
      <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
        <a className="mr-5 uppercase hover:text-gray-900">Home</a>
        <a className="mr-5 uppercase hover:text-gray-900">News</a>
        <a className="mr-5 uppercase hover:text-gray-900">How To Buy</a>
      </nav>
      <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
        Connect to a wallet
      </button>
    </div>
  </header>
);
