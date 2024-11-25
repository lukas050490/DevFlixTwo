import { useEffect, useState } from "react"

import { MdClose } from "react-icons/md";
import { Container, Background } from "./styles"
import {  getMovieVideos } from "../../services/getData";


function Modal({ movieId, setShowModal }) {
    const [videoMovie, setVideoMovie] = useState()

    useEffect(() => {

        async function getMovies() {

            setVideoMovie(await getMovieVideos(movieId))
        }

        getMovies()

    }, [])



    return (
        <Background>
            <MdClose 
            onClick={() => setShowModal(false)}
            className="icon"
            style={{
                position: 'absolute',
                top: '100px',
                right: '400px',
              }}
              size="50px"
              color="white" />
            {videoMovie && (
                <Container>
                    <iframe
                        src={`https://www.youtube.com/embed/${videoMovie[0].key}`}
                        title="Youtube Video Player"
                        height="500px"
                        width="100%"
                    ></iframe>
                </Container>
            )}
        </Background>
    )
}

export default Modal