import express from 'express';
import morgan from 'morgan';
import responseTime from 'response-time';

import cors from './middlewares/cors';
import caching from './middlewares/caching';

const app = express();

app.use(responseTime());
app.use(morgan('combined'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors);
app.use(caching);

app.get('/', async (req, res) => {

	const result = await someLongAsyncProcess();

	res.send(`Hello World! With: ${result}`);
});


app.listen(3000, () => {
	console.log('Listening on port 3000!');
});



async function someLongAsyncProcess () {
	return await new Promise(f => setTimeout(() => f('data'), 1000));
}
