import express, { Request, Response } from 'express'
import { getAllEvents, getEventByCategory, getEventById, addEvent } from "./services/EventService";
import type  Booklist from "./models/Event";
const app = express()
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

app.get("/BookList", (req, res) => {
     if (req.query.category) {
       const category = req.query.category as string;
       getEventByCategory(category)
           .then((booklist: Booklist[]) => {
               res.json(booklist);
           });
   } else {
       getAllEvents().then((events) => {res.send(events)});
   }

});
app.get("/BookList/:id", (req, res) => {
    const id = parseInt(req.params.id);
   getEventById(id)
       .then((booklist: Booklist | undefined) => {
           if (booklist) {
               res.json(booklist);
           } else {
               res.status(404).send("Event not found");
           }
       });
});
app.post("/BookList", (req, res) => {
    const newEvent: Booklist = req.body;
    addEvent(newEvent).then((booklist: Booklist)=>{
           res.json(booklist);
   }
)
});
app.get("/BookList", (req, res) => {
  res.json(getAllEvents);
});
