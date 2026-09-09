import ShowBann3r from '@/sections/ShowBanner'
import MovieDetails from '@/sections/MovieDetails'
import Seasons from '@/components/Seasons'

export const metadata = {
  title: 'Show - Stranger Things',
}

export default function () {
  return (
    <>
      <ShowBann3r />
      <MovieDetails
        seasons={<Seasons />}
      />
    </>
  )
}
