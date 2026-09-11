import './MoviesBanner.scss'
import Slider from '@/components/Slider'
import MovieBannerCard from '@/components/MovieBannerCard'
import movieCards from './items/movieCards'

const MoviesBanner = () => {
  const titleId = 'movies-banner-title'

  return (
    <section
      className="movies-banner container"
      aria-labelledby={titleId}
    >
      <h1
        className="visually-hidden"
        id={titleId}
      >
        Movies & Shows
      </h1>
      <Slider
        sliderParams={{
          slidesPerView: 1,
          breakpoints: {
            1024: {
              allowTouchMove: false,
            },
          },
        }}
        navigationPosition="abs-bottom"
        hasScrollbarOnMobile={false}
      >
        {movieCards.map((movieCard, index) => (
          <MovieBannerCard {...movieCard} key={index} />
        ))}
      </Slider>
    </section>
  )
}

export default MoviesBanner  