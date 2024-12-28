import axios from 'axios';

const api = axios.create({
    baseURL: 'https://restcountries.com/v3.1'
})

export const getCountry = async () => {
    try {
        const { data } = await api.get('/all?fields=name,population,region,capital,flags')
        return data
    } catch (error) {
        throw error
    }
}
export const getIndCountry = async (name) => {
    try {
        const { data } = await api.get(`/name/${name}?fullText=true&fields=name,population,region,subregion,capital,tld,currencies,languages,borders,flags`)
        return data
    } catch (error) {
        throw error
    }
}