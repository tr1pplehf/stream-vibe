import './Socials.scss'
import classNames from 'classnames'
import Button from '@/components/Button'

const Socials = (props) => {
  const {
    className,
    links = [],
  } = props

  return (
    <div
      className={classNames(className, 'soc1als')}
    >
      <ul className="soc1als__list">
        {links.map(({ label, iconSrc }, index) => (
          <li className="soc1als__item" key={index}>
            <Button
              className="soc1als__link"
              mode="black-10"
              href="/"
              target="_blank"
              label={label}
              isLabelHidden
              iconSrc={iconSrc}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Socials  