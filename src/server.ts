import express, { Request, Response } from 'express'
import cors, {CorsOptions} from 'cors';

//import { getAllEvents, getEventByCategory, getEventById, addEvent } from "./services/EventService";
//import type  Booklist from "./models/Event";
import eventRoute from './routes/EventRoute';
import path from 'path';
import multer from 'multer';
import { uploadFile } from './services/UploadFileService';
import dotenv from 'dotenv';
dotenv.config();

const webApp = express()
const webPort= 5050
 webApp.use(express.static(path.join(process.cwd())));
 webApp.listen(webPort, () => {
    console.log(`WebApp listening at http://localhost:${webPort}`)
 })

const app = express()
const port = process.env.PORT || 3000;
const corsOptions:CorsOptions = {
   origin: ['http://localhost:5050'],
   methods: ['GET','POST','OPTIONS'],
   allowedHeaders: ['Content-Type','Authorization'],


};
 const upload = multer({ storage: multer.memoryStorage() });

app.post('/upload', upload.single('file'), async (req: any, res: any) => {
  try {
    const file = req.file;
    if (!file) {
      return res.status(400).send('No file uploaded.');
    }

    //const bucket = 'images';
    //const filePath = `uploads`;
    const bucket = process.env.SUPABASE_BUCKET_NAME;
    const filePath = process.env.UPLOAD_DIR;

    if (!bucket || !filePath) {
      return res.status(500).send('Bucket name or file path not configured.');
    }

    const fileKey = await uploadFile(bucket, filePath, file);

    res.status(200).send(fileKey);
  } catch (error) {
    res.status(500).send('Error uploading file.');
  }
});

app.use(cors(corsOptions))
app.use('/BookList',eventRoute);

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
app.get('/presignedUrl', async (req: Request, res: Response) => {
    try {
        const { key } = req.query;
        if (!key || typeof key !== 'string') {
            return res.status(400).send('File key is required.');
        }
        const bucket = process.env.SUPABASE_BACKET_NAME ;
        if (!bucket ) {
            return res.status(500).send('Bucket or file path not configured.');
        }

        const { getPresignedUrl } = await import('./services/UploadFileService');
        const presignedUrl = await getPresignedUrl(bucket, key, 3600);
        +        res.status(200).json({ url: presignedUrl });
   } catch (error) {
        console.error('Error generating presigned URL:', error);
        res.status(500).send('Error generating presigned URL.');
    }
});

app.get("/BookList", (req, res) => {
  //res.json(getAllEvents);
});
