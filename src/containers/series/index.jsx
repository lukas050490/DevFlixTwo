import { useState, useEffect } from "react"
import { getTopSeries, getPopularSeries } from "../../services/getData"
import { getImages } from "../../utils/getImages"
import { Container, ContainerTwo } from "./styles"

function Series() {
    const [topSeries, setTopSeries] = useState();
    const [popularSeries, setPopularSeries] = useState();

    useEffect(() => {

        async function getAllData() {

            Promise.all([
                getTopSeries(),
                getPopularSeries(),
            ])
                .then(([topSeries, popularSeries]) => {
                    setTopSeries(topSeries)
                    setPopularSeries(popularSeries)
                })
                .catch((error) => console.error(error))

        }

        getAllData()


    }, [])


    return (
        <>
            {topSeries && topSeries.map((item, index) => (
                <Container key={index}>
                    <div>
                        <img src={getImages(item.poster_path || item.backdrop_path || '')} />
                        <h3>{item.title || item.name}</h3>
                    </div>
                </Container>
            ))}
            {popularSeries && popularSeries.map((item, index) => (
                <ContainerTwo key={index}>
                    <div>
                        <img src={getImages(item.poster_path || item.backdrop_path || '')} />
                        <h3>{item.title || item.name}</h3>
                    </div>
                </ContainerTwo>
            ))}
        </>
    )
}

export default Series 