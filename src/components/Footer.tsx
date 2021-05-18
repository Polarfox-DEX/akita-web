import { FunctionComponent } from 'react'
import classnames from 'classnames'
import {
  akitaTelegramLink,
  polarfoxTelegramLink,
  akitaDiscordLink,
  akitaTwitterLink,
  akitaInstagramLink,
  akitaMediumLink,
  polarfoxGithubLink,
  akitaEtherscanLink,
  akitaCoinMarketCapLink,
  akitaCoinGeckoLink,
  akitaTelegramLocal,
} from '../utils/links'
import Flag from 'react-country-flag'

export interface FooterProps {
  className?: string
}

const FooterLink = ({ name, link }: { name: string; link: string }) => {
  return (
    <p>
      <a href={link} target="blank">
        {name}
      </a>
    </p>
  )
}

const FooterLinkFlag = ({ name, link, flag }: { name: string; link: string; flag: string }) => {
  return (
    <p>
      <a href={link} target="blank">
        <Flag
          countryCode={flag}
          svg
          style={{
            width: '1em',
            height: '1em',
          }}
          title={flag}
        />{' '}
        {name}
      </a>
    </p>
  )
}

// Two flags for those folks
const CzechoslovakFooterLinkFlag = () => {
  return (
    <p>
      <a href={akitaTelegramLocal('CZ')} target="blank">
        <Flag
          countryCode={'CZ'}
          svg
          style={{
            width: '1em',
            height: '1em',
          }}
          title={'CZ'}
        />{' '}
        Czech &
        {' '}<Flag
          countryCode={'SK'}
          svg
          style={{
            width: '1em',
            height: '1em',
          }}
          title={'SK'}
        />{' '}
        Slovak
      </a>
    </p>
  )
}

export const Footer: FunctionComponent<FooterProps> = ({ className }) => (
  <section className={classnames('bg-blue-200 py-8', className)} style={{ background: "url('images/footer/bg.jpg')" }}>
    <div className="flex space-x-4">
      <div className="flex-1">
        <h4>Join the conversation!</h4>
        <FooterLink name="Main Akita Telegram" link={akitaTelegramLink} />
        <FooterLink name="Polarfox Telegram" link={polarfoxTelegramLink} />
        <FooterLink name="Discord" link={akitaDiscordLink} />
        <FooterLink name="Twitter" link={akitaTwitterLink} />
        <FooterLink name="Instagram" link={akitaInstagramLink} />
      </div>
      <div className="flex-1">
        <h4>Akita information and news</h4>
        <FooterLink name="Medium" link={akitaMediumLink} />
        <FooterLink name="GitHub" link={polarfoxGithubLink} />
        <FooterLink name="Etherscan" link={akitaEtherscanLink} />
        <FooterLink name="CoinMarketCap" link={akitaCoinMarketCapLink} />
        <FooterLink name="CoinGecko" link={akitaCoinGeckoLink} />
      </div>
      <div className="flex-1">
        <h4>Akita Telegram Europe</h4>
        <FooterLinkFlag name="French" link={akitaTelegramLocal('FR')} flag="FR" />
        <FooterLinkFlag name="Spanish" link={akitaTelegramLocal('ES')} flag="ES" />
        <FooterLinkFlag name="German" link={akitaTelegramLocal('DE')} flag="DE" />
        <FooterLinkFlag name="Russian" link={akitaTelegramLocal('RU')} flag="RU" />
        <CzechoslovakFooterLinkFlag />
        <FooterLinkFlag name="Dutch" link={akitaTelegramLocal('NL')} flag="NL" />
      </div>
      <div className="flex-1">
        <h4>Akita Telegram Asia</h4>
        <FooterLinkFlag name="Japanese" link={akitaTelegramLocal('JP')} flag="JP" />
        <FooterLinkFlag name="Vietnamese" link={akitaTelegramLocal('VN')} flag="VN" />
        <FooterLinkFlag name="Iranian" link={akitaTelegramLocal('IR')} flag="IR" />
        <FooterLinkFlag name="Turkish" link={akitaTelegramLocal('TR')} flag="TR" />
        <FooterLinkFlag name="Chinese" link={akitaTelegramLocal('CN')} flag="CN" />
        <FooterLinkFlag name="Indian" link={akitaTelegramLocal('IN')} flag="IN" />
        <FooterLinkFlag name="Arabic" link={akitaTelegramLocal('AE')} flag="AE" />
      </div>
    </div>
    <div className="pt-7">
      <p>
        Built by{' '}
        <a href="https://www.polarfox.io/" target="blank">
          Polarfox Labs
        </a>
      </p>
    </div>
    <div className="pt-2">
      <p>🦊</p>
    </div>
  </section>
)
