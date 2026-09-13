import './MovieDetails.scss'
import SliderNavigation from '@/components/Slider/components/SliderNavigation'
import Slider from '@/components/Slider'
import PersonCard from '@/components/PersonCard'
import Button from '@/components/Button'
import ReviewCard from '@/components/ReviewCard'
import Icon from '@/components/Icon'
import Tags from '@/components/Tags'
import Ratings from '@/components/Ratings'
import castItems from './items/castItems'
import reviewItems from './items/reviewItems'
import tagsItems from './items/tagsItems'
import ratingItems from './items/ratingItems'
import genresItems from './items/genresItems'

const MovieDetails = (props) => {
  const {
    seasons,
  } = props

  const titleId = 'movie-details-title'
  const castSliderNavigationId = 'movie-cast-slider-navigation'

  return (
    <section
      className="movie-details container"
      aria-labelledby={titleId}
    >
      <h2
        className="visually-hidden"
        id={titleId}
      >
        Detailed movie information
      </h2>
      <div className="movie-details__main">
        {seasons && (
          <div className="movie-details__panel movie-details__panel--seasons">
            <div className="movie-details__group movie-details__group--big-gap-y">
              <h3 className="h4">Seasons and Episodes</h3>
              {seasons}
            </div>
          </div>
        )}
        <div className="movie-details__panel movie-details__panel--description">
          <div className="movie-details__group">
            <h3 className="movie-details__title">Description</h3>
            <div className="movie-details__description">
              <p>Teenager Denji just wanted to live an ordinary life and eat his fill, but the debts left after his father’s death force the boy to eke out a half‑starved existence and live in a hovel. To pay off the yakuza, he has already sold some of his organs and even engages in illegal demon hunting, with the help of his unusual pet, Potita — a demonic creature with a chainsaw. One day, cunning bandits lure Denji into a trap and sacrifice him, but Potita doesn’t let the boy die. He splices his body and becomes the heart of his master — now Denji has enhanced regeneration and can also turn his limbs into chainsaws. The Public Safety Bureau hires such a valuable asset to hunt demons again. At his new job, the guy meets his colleagues — the melancholic hunter Aki, the hot‑tempered half‑demon Power — and falls in love with his mysterious boss, Makima.</p>
            </div>
          </div>
        </div>
        <div className="movie-details__panel">
          <header className="movie-details__panel-header">
            <h3 className="movie-details__title">Cast</h3>
            <SliderNavigation
              id={castSliderNavigationId}
              hasPagination={false}
              buttonMode="black-08"
              mode="rounded"
            />
          </header>
          <Slider
            navigationTargetElementId={castSliderNavigationId}
            hasScrollbarOnMobile={false}
            sliderParams={{
              slidesPerView: 'auto',
              spaceBetween: 10,
              breakpoints: {
                1024: {
                  slidesPerView: 'auto',
                  spaceBetween: 20,
                  allowTouchMove: false
                }
              }
            }}
          >
            {castItems.map((castItem, index) => (
              <PersonCard {...castItem} key={index} />
            ))}
          </Slider>
        </div>
        <div className="movie-details__panel movie-details__panel--large-gap-y">
          <header className="movie-details__panel-header">
            <h3 className="movie-details__title">Reviews</h3>
            <Button
              mode="black-08"
              iconSrc="/src/assets/sprite/plus.svg"
              label="Add your review"
              href="/"
            />
          </header>
          <Slider
            navigationMode="rounded"
            isNavigationHiddenOnMobile={false}
            hasScrollbarOnMobile={true}
            navigationJustifyContent="center"
            sliderParams={{
              slidesPerView: 2,
              slidesPerGroup: 2,
              breakpoints: {
                0: {
                  slidesPerView: 1,
                  slidesPerGroup: 1,
                  spaceBetween: 16,
                },
                1024: {
                  slidesPerView: 2,
                  slidesPerGroup: 2,
                  spaceBetween: 20,
                  allowTouchMove: false,
                }
              }
            }}
          >
            {reviewItems.map((reviewItem, index) => (
              <ReviewCard {...reviewItem} key={index} />
            ))}
          </Slider>
        </div>
      </div>
      <aside className="movie-details__info">
        <div className="movie-details__panel">
          <div className="movie-details__groups">
            <div className="movie-details__group">
              <h3 className="movie-details__title">
                <Icon src="/src/assets/sprite/calendar.svg" />
                <span>Released Year</span>
              </h3>
              <div className="movie-details__description">
                <time className="h6" dateTime="2022">2022</time>
              </div>
            </div>
            <div className="movie-details__group">
              <h3 className="movie-details__title">
                <Icon src="/src/assets/sprite/language.svg" />
                <span>Available Languages</span>
              </h3>
              <Tags items={tagsItems} />
            </div>
            <div className="movie-details__group">
              <h3 className="movie-details__title">
                <Icon src="/src/assets/sprite/star.svg" />
                <span>Ratings</span>
              </h3>
              <Ratings items={ratingItems} />
            </div>
            <div className="movie-details__group">
              <h3 className="movie-details__title">
                <Icon src="/src/assets/sprite/genres.svg" />
                <span>Genres</span>
              </h3>
              <Tags items={genresItems} />
            </div>
            <div className="movie-details__group">
              <h3 className="movie-details__title">Director</h3>
              <PersonCard
                name="Ryu Nakayama"
                subtitle="From Japan"
                imgSrc="/src/assets/images/cast/director.jpg"
              />
            </div>
            <div className="movie-details__group">
              <h3 className="movie-details__title">Music</h3>
              <PersonCard
                name="Kensuke Ushio"
                subtitle="From Japan"
                imgSrc="/src/assets/images/cast/music.jpg"
              />
            </div>
          </div>
        </div>
      </aside>
    </section>
  )
}

export default MovieDetails  