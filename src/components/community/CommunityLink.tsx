import { FunctionComponent } from 'react'

export interface CommunityLinkProps {
  name: string
  link: string
}

export const CommunityLink: FunctionComponent<CommunityLinkProps> = ({ name, link }) => (
  <div className="p-6">
    <div className="grid grid-cols-1 divide-y gap-y-5 text-justify">
      <h2 className="text-yellow-500">{name}</h2>
      <p className="pt-5">{link}</p>
    </div>
  </div>
)
