import express from 'express'
import { router } from './routes/filmesRoutes'

const app = express()

app.use(express.json())


 
app.use('/filmes', router)

app.listen(3333, () => {
    console.log('Servidor rodando na porta 3333')
}
)



const server = http.createServer((req, res) => {
const (method, url) = req    

if (method ==='GET' && url ==='/filmes'){
    return res.end('Buscar dados dos filmes')
}

if(method === 'POST' && url ==='/filmes'){
    return res.end('Inserir um novo filme')
}

console.log(req.method, req.url)    
res.end('Hello World')
})

server.listen(3333)