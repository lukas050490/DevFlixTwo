import axios from "axios"

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    params: {
        api_key: "8b6b8440aeee83f40d53e4002ed68df4",
        language: "pt-BR",
        page: 1
    }
})

export default api