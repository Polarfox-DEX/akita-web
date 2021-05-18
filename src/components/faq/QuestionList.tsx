import { FunctionComponent } from 'react'
import classnames from 'classnames'
import { Question } from './Question'
import questions from './questions.json'

export interface QuestionListProps {
  className?: string
}

export const QuestionList: FunctionComponent<QuestionListProps> = ({ className }) => (
  <section className={classnames('container px-5 mx-auto', className)}>
    <h1 className="mb-4">Frequently Asked Questions</h1>
    <p>Cannot find what you are looking for? Come ask on our <a className="hover:text-gray-900" href="https://t.me/akitatoken" target="blank">Telegram</a> or on our <a className="hover:text-gray-900" href="https://discord.gg/v85jGJUrnz" target="blank">Discord</a>!</p>
    <div>
      {questions.map((question) => (
        <Question key={question.question} {...question}></Question>
      ))}
    </div>
  </section>
)
