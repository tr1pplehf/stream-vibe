import './CategoryCard.scss'
import { Image } from 'minista/assets'
import Icon from '@/components/Icon'
import Badge from '@/components/Badge'

const CategoryCard = (props) => {
  const {
    title,
    images = [],
    badge,
  } = props

  return (
    <a className="category-card" href="/movies">
      <div className="category-card__images">
        {images.map((imgSrc, index) => (
          <Image
            className="category-card__image"
            src={imgSrc}
            key={index}
          />
        ))}
      </div>
      <div className="category-card__body">
        <h3 className="category-card__title">
          {badge && (
            <Badge
              className="category-card__badge"
              mode="accent"
              isBig
            >
              {badge}
            </Badge>
          )}
          <span>{title}</span>
        </h3>
        <Icon
          src="/src/assets/sprite/arrow-right.svg"
        />
      </div>
    </a>
  )
}

export default CategoryCard  