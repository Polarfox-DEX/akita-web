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
  getLocalAkitaTelegramUrl,
} from '../utils/links'
import Flag from 'react-country-flag'

export function Footer() {
  return (
    <section className="bg-blue-200 mt-24 py-8" style={{ background: "url('images/footer/bg.jpg')" }}>
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
          <FooterLinkFlag name="French" link={getLocalAkitaTelegramUrl('FR')} flag="FR" />
          <FooterLinkFlag name="Spanish" link={getLocalAkitaTelegramUrl('ES')} flag="ES" />
          <FooterLinkFlag name="German" link={getLocalAkitaTelegramUrl('DE')} flag="DE" />
          <FooterLinkFlag name="Russian" link={getLocalAkitaTelegramUrl('RU')} flag="RU" />
          <CzechoslovakFooterLinkFlag />
          <FooterLinkFlag name="Dutch" link={getLocalAkitaTelegramUrl('NL')} flag="NL" />
        </div>
        <div className="flex-1">
          <h4>Akita Telegram Asia</h4>
          <FooterLinkFlag name="Japanese" link={getLocalAkitaTelegramUrl('JP')} flag="JP" />
          <FooterLinkFlag name="Vietnamese" link={getLocalAkitaTelegramUrl('VN')} flag="VN" />
          <FooterLinkFlag name="Iranian" link={getLocalAkitaTelegramUrl('IR')} flag="IR" />
          <FooterLinkFlag name="Turkish" link={getLocalAkitaTelegramUrl('TR')} flag="TR" />
          <FooterLinkFlag name="Chinese" link={getLocalAkitaTelegramUrl('CN')} flag="CN" />
          <FooterLinkFlag name="Indian" link={getLocalAkitaTelegramUrl('IN')} flag="IN" />
          <FooterLinkFlag name="Arabic" link={getLocalAkitaTelegramUrl('AE')} flag="AE" />
        </div>
      </div>
      <div className="pt-7">
        <p>
          Built by{' '}
          <a href="https://www.polarfox.io/" target="blank" className="hover:text-gray-900">
            Polarfox Labs
          </a>
        </p>
      </div>
      <div className="pt-2">
        <p>🦊</p>
      </div>
    </section>
  )
}

function FooterLink({ name, link }: { name: string; link: string }) {
  return (
    <p>
      <a href={link} target="blank">
        {name}
      </a>
    </p>
  )
}

function FooterLinkFlag({ name, link, flag }: { name: string; link: string; flag: string }) {
  return (
    <p>
      <a href={link} target="blank" className="hover:text-gray-900">
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
function CzechoslovakFooterLinkFlag() {
  return (
    <p>
      <a href={getLocalAkitaTelegramUrl('CZ')} target="blank" className="hover:text-gray-900">
        <Flag
          countryCode={'CZ'}
          svg
          style={{
            width: '1em',
            height: '1em',
          }}
          title={'CZ'}
        />{' '}
        Czech &{' '}
        <Flag
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
