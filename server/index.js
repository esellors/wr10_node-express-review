const express = require('express');
const app = express();

const fortunes = [
    'You will have a good day',
    'There is doom in your future',
    'The love of your life is right around the corner',
    'You sibling will inherit your parents fortune',
    'You will inherit your parents fortune'
]

app.get('/api/fortunes', (req, res) => {
    
    if(req.query.giveMe) {
        //  user can get a fortune by searching using strings
        let foundFortune = fortunes.filter(fortuneStr => fortuneStr.includes(req.query.giveMe))
        
        res.status(200).send(foundFortune)
    } else {
        // user can get a random fortune
        const min = 0;
        const max = fortunes.length - 1;
        const randomIndex = Math.floor(Math.random() * (max - min) + min);
    
        res.status(200).send(fortunes[randomIndex])
    }
})

app.get('/api/fortunes/:fortuneIdx', (req, res) => {
    console.log(req.params)

    res.status(200).send(fortunes[+req.params.fortuneIdx])
})

const SERVER_PORT = 5050;
app.listen(SERVER_PORT, () => console.log(`Server jamming on ${SERVER_PORT}`))