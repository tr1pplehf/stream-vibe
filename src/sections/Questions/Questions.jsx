import './Questions.scss'
import Section from '@/layouts/Sections'
import Button from '@/components/Button'
import AccordionGroup from '@/components/AccordionGroup'
import Accordion from '@/components/Accordion'
import questionItems from './items/questionItems'

const Questions = () => {
  return (
    <Section
      title="Frequently Asked Questions"
      titleId="questions-title"
      description="Got questions? We've got answers! Check out our FAQ section to find answers to the most common questions about StreamVibe."
      actions={(
        <Button
          label="Ask a Question"
          href="/support"
        />
      )}
    >
      <AccordionGroup columns="2">
        {questionItems.map((question, index) => (
          <Accordion
            title={question}
            id={`question-${index}`}
            name="questions"
            isOpen={index === 0}
            key={index}
          >
            <p>StreamVibe is a streaming service that allows you to watch movies and shows on demand.</p>
          </Accordion>
        ))}
      </AccordionGroup>
    </Section>
  )
}

export default Questions  