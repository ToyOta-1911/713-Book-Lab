import express, { Request, Response } from 'express'
//import { getAllEvents, getEventByCategory, getEventById, addEvent } from "./services/EventService";
//import type  Booklist from "./models/Event";
import eventRoute from './routes/EventRoute';
const app = express()
app.use('/BookList',eventRoute);
const port = 3000


app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})


 app.get('/test', (req, res) => {
     let returnObj = {
        name: 'test',
        age: 20,
        address: 'Thai'
    }
    res.send(returnObj);
 })
app.get('/test', (req: Request, res: Response) => {
    const id = req.query.id;
    const output = `id: ${id}`;
    res.send(output);
  })
app.listen(port, () => {
   console.log(`App listening at http://localhost:${port}`)
})

app.get("/BookList", (req, res) => {
  //res.json(getAllEvents);
});
