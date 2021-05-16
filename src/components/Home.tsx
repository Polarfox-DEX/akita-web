import { FunctionComponent } from 'react';

export const Home: FunctionComponent = () => (
  <section className="text-gray-600 body-font overflow-hidden text-left">
    <div className="container px-5 py-24 mx-auto">
      <div className="lg:w-5/5 flex flex-wrap">
        <div>
          <h1>AKITA NETWORK 秋田犬</h1>
          <h2>social media meets DeFi</h2>
          <p>
            AKITA INU started as a meme. Now we'll brigde to AVAX for project
            governance - empowering our community.
          </p>

          <a className="readon banner" href="https://t.me/akitatoken">
            Join our Telegram
          </a>
          <br />
          <a
            className="readon banner bannerv2"
            style={{ marginTop: '10px' }}
            href="https://twitter.com/akita_network"
          >
            Follow our Twitter
          </a>
        </div>

        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 flex flex-col justify-center">
          second
        </div>
      </div>
    </div>
  </section>
);
