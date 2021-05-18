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
    <p>If you cannot find what you are asking for here, you are welcome to ask on our Telegram or on our Discord!</p>
    <div>
      {questions.map((question) => (
        <Question key={question.question} {...question}></Question>
      ))}
    </div>
  </section>
)
