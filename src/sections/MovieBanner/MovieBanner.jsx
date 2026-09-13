import './MovieBanner.scss'
import MovieBannerCard from '@/components/MovieBannerCard'

const MovieBanner = () => {
  const titleId = 'movie-banner-title'

  return (
    <section
      className="container"
      aria-labelledby={titleId}
    >
      <MovieBannerCard
        title="Chainsaw Man"
        titleId={titleId}
        TitleTag="h1"
        href="/show"
        description="An orphan in debt becomes a desperate fighter against demons. A bloody anime based on one of the most popular manga."
        imgSrc="/src/assets/images/movie-banner/1.webp"
        isSmallPaddingY
      />
    </section>
  )
}

export default MovieBanner  