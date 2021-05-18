import { FunctionComponent } from 'react'

export interface QuestionProps {
  question: string
  answer: JSX.Element
}

export const Question: FunctionComponent<QuestionProps> = ({ question, answer }) => (
  <div className="p-6">
    <div className="grid grid-cols-1 divide-y gap-y-5 text-justify">
      <h2 className="text-yellow-500">{question}</h2>
      <p className="pt-5">{answer}</p>
    </div>
  </div>
)
