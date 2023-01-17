import axios from 'axios'

const instace = axios.create({
    baseURL: 'https://restaurantsapi-production-e5fd.up.railway.app/',
})

export default instace
