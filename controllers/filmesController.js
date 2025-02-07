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

    const buscarFilmesPorID = (req, res) => {
        const {id} = req.params
        const filme = filmes.find((a) => a.id ===id)

        if(!filme){
            return res.json({
                erro: true,
                mensage: 'Filme não encontrado'
            })
        }
        res.json(filme)
    }
const atualizarFilme = (req, res) => {
    const {id} = req.params;
    const {nome, faxaetaria, genero} = req.body;

    const filme = filme.find((a) => a.id === id);

    if (!filme){
        return res.json({
            erro: true,
            mensage: 'Filme nao encontrado'
        })
    }

    if (!nome || !faxaetaria|| !genero) {
        return res.json({
            erro: true,
            mensage: 'Todos os campos são obrigatórios'
        })
    }

    filme.nome = nome;
    filme.faxaetaria = faxaetaria;
    filme.genero = genero;

    res.json({
        erro: false,
        mensage: 'Filme alterado com sucesso',
        filme
    })

}


const excluirFilme = (req,res) => {
    const {id} = req.params;
    const index = filme.findIndex((a) => a.id === id)

    if(index === -1){
        return res.json({
            erro: true,
            mensage: 'Filme não encontrado'
        })
    }

    filme.splice(index, 1);
    res.json({
        erro: false,
        mensage: 'Filme deletado'
    })

}

    export {listarFilmes, addFilme, buscarFilmesPorID, atualizarFilme, excluirFilme}