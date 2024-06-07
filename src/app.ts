import express from 'express';
import { envs } from './config';

(() => {
    main();
})();


function main() {

    const app = express();

    app.post('/api/github', (req, res) => {
        res.json('Github Endopint');
    });

    app.listen( envs.PORT, () => {
        console.log(`App running on port ${ envs.PORT }`);
    });

}

