import {randowUUID} from 'node:crypto'


let filmes = [
    {
        id: randowUUID(),
        nome: 'Titanic',
        faxaetaria: 16,
        genero: 'romance'

    }
]

const listaFilme = (req, res) => {
    res.json(filmes)
}


const addFilme = (req, res) => {
    const {nome, faxaetaria, genero} = req.body

    if(!nome || !faxaetaria || !genero) {
        return res.json ({
            erro: true,
            mensage: 'Falta valores a inserir'
        })
    }
    const filme = {
        id: randowUUID(),
        nome,
        faxaetaria,
        genero
    }

    try{
    filmes.push(filme)
    return res.json({
        erro: false,
        mensage: 'Valores inseridos no banco'
        })
    } catch (error) {
        console.log (error)
        return res.json({
            erro: true,
            mensage: error
        })
    }}


    export {listarFilmes, addFilme}