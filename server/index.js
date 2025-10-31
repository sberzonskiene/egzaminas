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
import { getAdminQuestions } from './src/api/admin/getQuestions.js';
import { postAdminQuestions } from './src/api/admin/postQuestions.js';
import { putAdminQuestions } from './src/api/admin/putQuestions.js';
import { deleteAdminQuestions } from './src/api/admin/deletequestions.js';
import { getLogout } from './src/api/admin/getLogout.js';
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
app.get('/api/logout', isAdmin, getLogout);

app.get('/api/admin/questions', isAdmin, getAdminQuestions);
app.post('/api/admin/questions', isAdmin, postAdminQuestions);
app.put('/api/admin/questions/:original_url', isAdmin, putAdminQuestions);
app.delete('/api/admin/questions/:url', isAdmin, deleteAdminQuestions);

app.get('*error', (req, res) => {
    return res.json({
        status: 'error',
        message: 'No such route',
    });
});

app.listen(PORT, () => {
    console.log(`Server running: http://localhost:${PORT}`);
});