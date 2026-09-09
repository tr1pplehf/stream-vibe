import './Seasons.scss'
import AccordionGroup from '@/components/AccordionGroup'
import seasonItems from './seasonItems'
import Accordion from '@/components/Accordion'

const Seasons = (props) => {
  const {} = props

  return (
    <AccordionGroup
      mode="dark"
      isOrderedList={false}
    >
      {seasonItems.map(({ title, subtitle, episodes }, index) => (
        <Accordion
          title={title}
          titleLevelClassName="h4"
          subtitle={subtitle}
          id={`season-${index}`}
          name="seasons"
          isOpen={index === 0}
          key={index}
          isArrowButton
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, odit.
        </Accordion>
      ))}
    </AccordionGroup>
  )
}

export default Seasons  