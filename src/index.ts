import { Context } from './Context'
import * as express from 'express';
import * as dotenv from 'dotenv';
import * as fs from 'fs'

const env = dotenv.parse(fs.readFileSync(__dirname + `/../environments/${process.env.NODE_ENV}.env`));
const app = express();

const appContext = new Context

app.use(express.json())

// Just get the current state of the state machine
app.get('/', (req, res) => {
    res.send(`Current State: ${appContext.getCurrentState()}`);
})

// With some input, the current state does some work and may decide to transition given the current context
app.get('/handle', (req, res) => {
    appContext.handle(req)
    res.send(`Handled request: ${req} | Current state: ${appContext.getCurrentState()}`);
})

// A simple example of how the context could be made ready for states to decide to transition
app.get('/ready', (req, res) => {
    appContext.makeReady()
    res.send(`${appContext.getCurrentState()} ready to transition!`)
})

app.listen(env.PORT, () => {
    console.log(`[server]: Server is running at https://localhost:${env.PORT}`);
})
