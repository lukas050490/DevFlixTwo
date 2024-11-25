import { useState, useEffect } from "react"
import {  getTopMovies } from "../../services/getData"
import { getImages } from "../../utils/getImages"
import { Container } from "./styles"

function Movies () {
    const [topMovies, setTopMovie] = useState();
   

    useEffect(() => {

        async function getAllData() {
    
          Promise.all([
             getTopMovies()
            ])
          .then(([ topMovies]) => {
            setTopMovie(topMovies)
          })
          .catch((error) => console.error(error))
    
        }
    
        getAllData()
    
    
      }, [])
    

    return (
        <>
            {topMovies && topMovies.map((item, index) => (
        <Container key={index}>
          <div>
            <img src={getImages(item.poster_path || item.backdrop_path || '')} />
            <h3>{item.title || item.name}</h3>
          </div>
        </Container>
      ))}
        </>
    )
}

export default Movies 