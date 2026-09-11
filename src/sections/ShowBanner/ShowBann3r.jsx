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
        title="Stranger Things"
        titleId={titleId}
        TitleTag="h1"
        description="When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl."
        imgSrc="/src/assets/images/show-banner/1.jpg"
        isSmallPaddingY
      />
    </section>
  )
}

export default ShowBann3r