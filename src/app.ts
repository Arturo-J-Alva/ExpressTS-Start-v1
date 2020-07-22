import express from 'express'
import bodyParser from 'body-parser'
// Create a new express application instance
const app: express.Application = express();

app.use(bodyParser.urlencoded({ extended: false }));
//app.use(badyParser.text());
app.use(bodyParser.json());

//CORS : permites las peticiones Ajax, Axios,
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.get('/test', async (req, res) => {
    return res.status(200).send({message:'exito get test!'})
})

app.post('/test', async (req, res) => {
    return res.status(200).send({message:'exito post test!'})
})

export default app
