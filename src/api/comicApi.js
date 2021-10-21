import axios from 'axios'
import comicRandom from '@/helpers/comicRandom'

const comicApi = axios.create({
    baseURL: `https://getxkcd.vercel.app/api/comic?num=${comicRandom()}`
})

export default comicApi