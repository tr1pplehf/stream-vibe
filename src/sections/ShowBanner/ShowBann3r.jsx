import './ShowBanner.scss'
import MovieBannerCard from '@/components/MovieBannerCard'

const ShowBann3r = () => {
  const titleId = 'show-title'

  return (
    <section
      className="container"
      aria-labelledby={titleId}
    >
      <MovieBannerCard
        title="Chainsaw Man"
        titleId={titleId}
        TitleTag="h1"
        description="An orphan in debt becomes a desperate fighter against demons. A bloody anime based on one of the most popular manga."
        imgSrc="/src/assets/images/movie-banner/1.webp"
        isSmallPaddingY
      />
    </section>
  )
}

export default ShowBann3r