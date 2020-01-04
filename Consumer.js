const {
    ObterName,
    ObterNave,
    ObterPlanets
} = require('./service')

Array.prototype.Mapear = function(callback){
    const NewsArray = []
    for(let i = 0; i <= this.length - 8; i++){
        const result = callback(this[i], i)
        NewsArray.push(result)
    }

    return NewsArray
}

async function main(){
    
try {

    console.time('Names Exe')
    const HNome = await ObterName('Vader')

    const Nome = HNome.results.map((nome) => nome.name)
    
    console.log(Nome, `Quantity Names : ${Nome.length}`)

    console.timeEnd('Names Exe')

    console.time('Planets Exe')
    const HPlanets = await ObterPlanets('')

    const Planets = HPlanets.results.Mapear((planetas, indice)=> {
        return `${planetas.name}, ${indice}`
    })
    
    console.log(Planets, `Quantity Planets : ${Planets.length}`)

    console.timeEnd('Planets Exe')

    console.time('Naves exe')

    const {
        results
    }= await ObterNave('')

    const Naves = results.filter((item) => {
        return item.name.indexOf('Death Star') === -1
    })

    const Ship = Naves.map((ship) => ship.name)
    console.log(Ship, `Quantity Ships : ${Ship.length}`)

    console.timeEnd('Naves exe')

} catch (error) {
        console.error("BERRRROUU ----> ", error)
    }
}

main()

