const axios = require('axios');
const URL = 'https://swapi.co/api/people'
const URLNa = 'https://swapi.co/api/starships'
const URLP = 'https://swapi.co/api/planets'

async function ObterName(name){
    const url = `${URL}/?search=${name}&format=json`
    const reponse = await axios.get(url)

    return reponse.data
}
async function ObterNave(ship){
    const url = `${URLNa}/?search=${ship}&format=json`
    const resposta = await axios.get(url)

    return resposta.data
}
async function ObterPlanets(planet){
    const url = `${URLP}/?search=${planet}&format=json`
    const saida = await axios.get(url)

    return saida.data
}

module.exports = {
    ObterName,
    ObterNave,
    ObterPlanets
}

