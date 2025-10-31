import express from 'express';
import cors from 'cors';

// import { postRegister } from './src/api/public/postRegister.js';

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    return res.json({
        status: 'success',
        message: 'Server is running',
    });
});

// app.post('/api/register', postRegister);

app.use((err, req, res, next) => {
    console.log(err);
    return res.status(500).send('Server error');
});

app.get('*error', (req, res) => {
    return res.json({
        status: 'error',
        message: 'No such route',
    });
});

app.listen(5410, () => {
    console.log(`Server running: http://localhost:5410`);
});