import path from 'node:path';
import express from 'express';
import mongoose from 'mongoose';

import {router} from './router';

mongoose.connect('mongodb://localhost:27017')
    .then(() => {
        const app = express();
        const port = 3001;
        console.log('conectado ao mongodb');

        // forma do back-end acessara os arquivos estáticos (imagens)
        app.use('./uploads', express.static(path.resolve(__dirname, '..', 'uploads')));
        // É necessário fazer isso antes do router, pois transforma em objeto javascript
        app.use(express.json());
        // aplicando as rotas ao app
        app.use(router);

        app.listen(port, () => {
            console.log(`🚀 Server is running on http://localhost:${port}`);
        });
    })
    .catch(() => console.log('erro ao conectar ao mongodb'));


