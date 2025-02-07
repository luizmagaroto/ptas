import express from 'express'
import { addFilme,atualizarFilme,excluirFilme,listarFilmes } from '../controllers/filmesController.js';

const router = express.Router();

router.get('/', listarFilmes)
routes.post('/', addFilme)
router.get('/:id', buscarFilmesPorID)
routes.put('/:id', atualizarFilme) 
routes.put('/:id', excluirFilme) 

export {router}
