import { FunctionComponent } from 'react'
import classnames from 'classnames'
import { Question } from './Question'
import whatIsAkita from './questions/whatIsAkita'
import whatIsAkitaNetwork from './questions/whatIsAkitaNetwork'
import { akitaDiscordLink, akitaTelegramLink } from '../../utils/links'
import whatIsGAkita from './questions/whatIsGAkita'
import whyAvalanche from './questions/whyAvalanche'
import whatIsPfx from './questions/whatIsPfx'
import whatIsPolarfoxLabs from './questions/whatIsPolarfoxLabs'
import howDoesPolarfoxWork from './questions/howDoesPolarfoxWork'
import whatIsDreamSwap from './questions/whatIsDreamSwap'
import whenLambo from './questions/whenLambo'
import canIBuyAkitaBsc from './questions/canIBuyAkitaBsc'
import tellMeMoreAkitaTeam from './questions/tellMeMoreAkitaTeam'

export interface QuestionListProps {
  className?: string
}

export const QuestionList: FunctionComponent<QuestionListProps> = ({ className }) => (
  <section className={classnames('container px-5 mx-auto', className)}>
    <h1 className="mb-4">Frequently Asked Questions</h1>
    <p>
      Cannot find what you are looking for? Come ask on our{' '}
      <a className="hover:text-gray-900" href={akitaTelegramLink} target="blank">
        Telegram
      </a>{' '}
      or on our{' '}
      <a className="hover:text-gray-900" href={akitaDiscordLink} target="blank">
        Discord
      </a>
      !
    </p>
    <Question question="What is AKITA?" answer={whatIsAkita}></Question>
    <Question question="What is AKITA Network 秋田犬?" answer={whatIsAkitaNetwork}></Question>
    <Question question="What is gAKITA?" answer={whatIsGAkita}></Question>
    <Question question="What is Polarfox Labs?" answer={whatIsPolarfoxLabs}></Question>
    <Question question="What is PFX?" answer={whatIsPfx}></Question>
    <Question question="Why Avalanche?" answer={whyAvalanche}></Question>
    <Question question="How does Polarfox work?" answer={howDoesPolarfoxWork}></Question>
    <Question question="What is Dreamswap?" answer={whatIsDreamSwap}></Question>
    <Question question="Can I buy AKITA on the Binance Smart Chain?" answer={canIBuyAkitaBsc}></Question>
    <Question question="When lambo?" answer={whenLambo}></Question>
    <Question question="Tell me more about the AKITA team!" answer={tellMeMoreAkitaTeam}></Question>
    {/* <Question question="Where does this project get its resources?" answer={}></Question> */}
    {/* <Question question="What are the technologies at the heart of the project?" answer={}></Question> */}
    {/* <Question question="Is AKITA / gAKITA / PFX mineable?" answer={}></Question> */}
    {/* <Question question="How to get gAKITA? // How do I buy a big bag AKITAs?" answer={}></Question> */}
    {/* <Question question="How to get PFX?" answer={}></Question> */}
    {/* <Question question="What happens to AKITA after the Polarfox launch?" answer={}></Question> */}
    {/* <Question question="What is the AKITA market cap?" answer={}></Question> */}
    {/* <Question question="Where do I get latest furry news? " answer={}></Question> */}
    {/* <Question question="As a fan, where may I join the AKITA Network? " answer={}></Question> */}
    {/* <Question question="Any partnerships?" answer={}></Question> */}
    {/* <Question question="What about future?" answer={}></Question> */}
  </section>
)
