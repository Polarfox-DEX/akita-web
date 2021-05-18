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
import whatIsDream from './questions/whatIsDream'
import whenLambo from './questions/whenLambo'
import canIBuyAkitaBsc from './questions/canIBuyAkitaBsc'
import tellMeMoreAkitaTeam from './questions/tellMeMoreAkitaTeam'
import projectResources from './questions/projectResources'
import areTokensMineable from './questions/areTokensMineable'
import howToGetGAkita from './questions/howToGetGAkita'
import howToGetPfx from './questions/howToGetPfx'
import whatHappensToAkitaAfterPolarfox from './questions/whatHappensToAkitaAfterPolarfox'
import akitaMarketCap from './questions/akitaMarketCap'
import joinAkitaNetwork from './questions/joinAkitaNetwork'

export function QuestionList() {
  return (
    <section className="container px-5 mx-auto mt-24">
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
      <Question question="What is DreamSwap?" answer={whatIsDreamSwap}></Question>
      <Question question="What is Dream?" answer={whatIsDream}></Question>
      <Question question="Can I buy AKITA on the Binance Smart Chain?" answer={canIBuyAkitaBsc}></Question>
      <Question question="When lambo?" answer={whenLambo}></Question>
      <Question question="Tell me more about the AKITA team!" answer={tellMeMoreAkitaTeam}></Question>
      <Question question="Where does this project get its resources?" answer={projectResources}></Question>
      <Question question="Are AKITA, gAKITA and PFX mineable?" answer={areTokensMineable}></Question>
      <Question question="How to get gAKITA?" answer={howToGetGAkita}></Question>
      <Question question="How to get PFX?" answer={howToGetPfx}></Question>
      <Question
        question="What happens to AKITA after the Polarfox launch?"
        answer={whatHappensToAkitaAfterPolarfox}
      ></Question>
      <Question question="What is the AKITA market cap?" answer={akitaMarketCap}></Question>
      <Question question="As a fan, where may I join the AKITA Network? " answer={joinAkitaNetwork}></Question>
    </section>
  )
}
