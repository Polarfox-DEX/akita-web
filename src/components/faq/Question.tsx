export interface QuestionProps {
  question: string
  answer: JSX.Element
}

export function Question({ question, answer }: QuestionProps) {
  return (
    <div className="p-6">
      <div className="grid grid-cols-1 divide-y gap-y-5 text-justify">
        <h2 className="text-yellow-500">{question}</h2>
        <div className="pt-5">{answer}</div>
      </div>
    </div>
  )
}
