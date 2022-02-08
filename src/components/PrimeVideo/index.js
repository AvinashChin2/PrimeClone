import MoviesSlider from '../MoviesSlider'

import {
  AppContainer,
  MainContainer,
  PrimeImage,
  ContentContainer,
  MoviesHeading,
} from './styledComponents'

const PrimeVideo = props => {
  const {moviesList} = props
  const actionMovies = moviesList.filter(movie => movie.categoryId === 'ACTION')
  const comedyMovies = moviesList.filter(movie => movie.categoryId === 'COMEDY')

  return (
    <AppContainer>
      <MainContainer>
        <PrimeImage
          src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
          alt="prime video"
        />
        <ContentContainer>
          <MoviesHeading>Action Movies</MoviesHeading>
          <MoviesSlider moviesList={actionMovies} />
          <MoviesHeading>Comedy Movies</MoviesHeading>
          <MoviesSlider moviesList={comedyMovies} />
        </ContentContainer>
      </MainContainer>
    </AppContainer>
  )
}
export default PrimeVideo
