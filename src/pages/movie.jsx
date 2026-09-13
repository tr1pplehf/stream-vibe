import MovieBanner from '@/sections/MovieBanner'
import MovieDetails from '@/sections/MovieDetails'

export const metadata = {
  title: 'Chainsaw Man',
}

export default () => {
  return (
    <>
      <MovieBanner />
      <MovieDetails />
    </>
  )
}
