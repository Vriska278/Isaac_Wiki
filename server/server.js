import express from 'express';
import dotenv from 'dotenv'
import dbConnect from './config/mongoose-config.js';
import bossRouter from './routes/boss-routes.js';
import cors from 'cors'

const app = express();
dotenv.config();

const PORT = process.env.PORT;

app.use(express.json(), cors());
app.use('/api/bosses', bossRouter);

async function serverStart() {
    try {
        await dbConnect();
        app.listen(PORT, () => console.log(`listening on port ${PORT}`));
    }
    catch (err){
        console.error(err);
    }
}
serverStart();