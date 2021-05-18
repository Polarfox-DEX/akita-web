import { FunctionComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTelegramPlane, faDiscord, faTwitter } from '@fortawesome/free-brands-svg-icons';

import './Banner.scss';
import { akitaDiscordLink, akitaTelegramLink, akitaTwitterLink } from '../../utils/links';

export const Banner: FunctionComponent = () => (
  <section className="overflow-hidden text-left">
    <div className="container px-28 mx-auto">
      <div className="lg:w-5/5 flex flex-wrap items-center">
        <div className="lg:w-1/2 w-full lg:h-auto">
          <h1>AKITA NETWORK 秋田犬</h1>
          <h2 className="pt-7">Social media meets DeFi</h2>
          <p className="pt-9">
            AKITA INU started as a meme. Now we'll bridge to Avalanche for project
            governance - empowering our community.
          </p>

          <div className="pt-9">
            <a
              className="readon banner flex items-center pl-5 w-64 h-10"
              href={akitaTelegramLink}
              target="blank"
            >
              <div className="w-4/5">Join our Telegram</div>
              <div className="w-1/5 text-center" style={{ zIndex: 3 }}>
                <FontAwesomeIcon icon={faTelegramPlane} />
              </div>
            </a>
          </div>
          <div className="pt-5">
            <a
              className="readon banner flex items-center pl-5 w-64 h-10"
              href={akitaDiscordLink}
              target="blank"
            >
              <div className="w-4/5">Join our Discord</div>
              <div className="w-1/5 text-center" style={{ zIndex: 3 }}>
                <FontAwesomeIcon icon={faDiscord} />
              </div>
            </a>
          </div>
          <div className="pt-5">
            <a
              className="readon banner flex items-center pl-5 w-64 h-10"
              href={akitaTwitterLink}
              target="blank"
            >
              <div className="w-4/5">Follow our Twitter</div>
              <div className="w-1/5 text-center" style={{ zIndex: 3 }}>
                <FontAwesomeIcon icon={faTwitter} />
              </div>
            </a>
          </div>
        </div>
        <div
          id="spinner"
          className="lg:w-1/2 w-full lg:py-6 mt-6 lg:mt-0 flex justify-center items-center"
        >
          <div
            className="flex justify-center items-center"
            style={{
              backgroundColor: 'red',
              background:
                'url(images/banner/shape/shape-circle-bg.png) no-repeat center center',
              backgroundSize: '30rem',
              height: '35rem',
              width: '100%',
            }}
          >
            <img
              src="images/banner/akita.png"
              alt="akita logo"
              className="h-96 w-96"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);
