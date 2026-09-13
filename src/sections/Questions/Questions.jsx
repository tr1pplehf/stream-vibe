import './Questions.scss'
import Section from '@/layouts/Sections'
import Button from '@/components/Button'
import AccordionGroup from '@/components/AccordionGroup'
import Accordion from '@/components/Accordion'
import questionItems from './items/questionItems'
import { getUrl } from '@/utils/getUrl'

const Questions = () => {
  return (
    <Section
      title="Frequently Asked Questions"
      titleId="questions-title"
      description="Got questions? We've got answers! Check out our FAQ section to find answers to the most common questions about AnimeVibe."
      actions={(
        <Button
          label="Ask a Question"
          href={getUrl("/support")}
        />
      )}
    >
      <AccordionGroup columns="2">
        {questionItems.map(({ question, answer }, index) => (
          <Accordion
            title={question}
            id={`question-${index}`}
            name="questions"
            isOpen={index === 0}
            key={index}
          >
            <p>{answer}</p>
          </Accordion>
        ))}
      </AccordionGroup>
    </Section>
  )
}

export default Questions  