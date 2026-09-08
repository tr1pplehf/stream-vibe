import './MovieCard.scss'
import { Image } from 'minista/assets'
import Badge from '@/components/Badge'

const MovieCard = (props) => {
  const {
    title,
    imgSrc,
    duration,
    views,
    href = '/movie',
  } = props

  return (
    <a
      className="movie-card"
      href={href}
      title={title}
    >
      <h3 className="visually-hidden">{title}</h3>
      <Image
        className="movie-card__image"
        src={imgSrc}
      />
      <div className="movie-card__body">
        {duration && (
          <Badge
            iconSrc="/src/assets/sprite/clock.svg"
            iconAriaLabel="Duration"
            hasFillIcon
          >
            {duration}
          </Badge>
        )}
        {views && (
          <Badge
            iconSrc="/src/assets/sprite/eye.svg"
            iconAriaLabel="Views"
            hasFillIcon
          >
            {views}
          </Badge>
        )}
      </div>
    </a>
  )
}

export default MovieCard