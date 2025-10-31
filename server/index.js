import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

import { postPublicRegister } from './src/api/public/postRegister.js';
import { postPublicLogin } from './src/api/public/postLogin.js';
import { getLogin } from './src/api/public/getLogin.js';
import { cookieParser } from './src/middleware/cookieParser.js';
import { userData } from './src/middleware/userData.js';
import { isAdmin } from './src/middleware/isAdmin.js';
import { isPublic } from './src/middleware/isPublic.js';
import { PORT } from './src/env.js';

const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(helmet());
app.use(cors({
    credentials: true,
    methods: 'GET, HEAD, PUT, PATCH, POST, DELETE',
    origin: 'http://localhost:5411',
}));
app.use(cookieParser);
app.use(userData);

app.get('/', (req, res) => {
    return res.json({
        status: 'success',
        message: 'Server is running',
    });
});


app.post('/api/register', isPublic, postPublicRegister);
app.post('/api/login', isPublic, postPublicLogin);

app.get('/api/login', isAdmin, getLogin);

app.get('*error', (req, res) => {
    return res.json({
        status: 'error',
        message: 'No such route',
    });
});

app.listen(PORT, () => {
    console.log(`Server running: http://localhost:${PORT}`);
});