import { FunctionComponent } from 'react'
import classnames from 'classnames'
import { CommunityLink } from './CommunityLink'

export interface CommunityLinksProps {
  className?: string
}

export const CommunityLinks: FunctionComponent<CommunityLinksProps> = ({ className }) => (
  <section className={classnames('container px-5 mx-auto', className)}>
    <h1 className="mb-4">Useful Links</h1>
    <p>Cannot find what you are looking for? Come ask on our <a className="hover:text-gray-900" href="https://t.me/akitatoken" target="blank">Telegram</a> or on our <a className="hover:text-gray-900" href="https://discord.gg/v85jGJUrnz" target="blank">Discord</a>!</p>
    <div>
        <CommunityLink name="Telegram" link="t.me/akitatoken"></CommunityLink>
    </div>
  </section>
)
