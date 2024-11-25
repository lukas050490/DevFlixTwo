
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

import Button from "../../components/Button"

import { Background, Info, Poster, Container, ContainerButton } from "./styles"
import Slider from "../../components/Slider";
import { getImages } from "../../utils/getImages";
import Modal from "../../components/Modal";
import { getMovies, getPopularSeries, getTopArtist, getTopMovies, getTopSeries } from "../../services/getData"

function Home() {
  const [showModal, setShowModal] = useState(false);
  const [movie, setMovie] = useState();
  const [topMovies, setTopMovie] = useState();
  const [topSeries, setTopSeries] = useState();
  const [popularSeries, setPopularSeries] = useState();
  const [topArtist, setTopArtist] = useState();
  const navigate = useNavigate();

  useEffect(() => {

    async function getAllData() {

      Promise.all([
         getMovies(),
         getTopMovies(),
         getTopSeries(),
         getPopularSeries(),
         getTopArtist()
      ])
      .then(([movies, topMovies, topSeries, popularSeries, topArtist]) => {
        setMovie(movies)
        setTopMovie(topMovies)
        setTopSeries(topSeries)
        setPopularSeries(popularSeries)
        setTopArtist(topArtist)
      })
      .catch((error) => console.error(error))

    }

   

    getAllData()


  }, [])




  return (
    <>
      {movie && (
        <Background img={getImages(movie.backdrop_path)}>
         {showModal && <Modal movieId={movie.id} setShowModal={setShowModal}/>} 
          <Container>
            <Info>
              <h1>{movie.title}</h1>
              <p>{movie.overview}</p>
              <ContainerButton>
                <Button red onClick={()=> navigate(`/detalhe/${movie.id}`)}> Assista agora</Button>
                <Button onClick={() => setShowModal(true)}> Assista o Trailer</Button>
              </ContainerButton>
            </Info>
            <Poster>
              <img alt="capa-do filme" src={getImages(movie.poster_path)} />
            </Poster>
          </Container>
        </Background>
      )}
      {topMovies && <Slider info={topMovies} title={"Top Filmes"}/>}
      {topSeries && <Slider info={topSeries} title={"Top Series"}/>}
      {popularSeries && <Slider info={popularSeries} title={"Séries Populares"}/>}
      {topArtist && <Slider info={topArtist} title={"Artistas Populares"}/>}
    </>
  )
}

export default Home 