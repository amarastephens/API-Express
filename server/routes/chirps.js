const express = require('express')
const chirpsStore = require('./chirpstore.js')
const app = express()

let router = express.Router()


router.get('/', (req, res) => {
    res.send(chirpsStore.GetChirps())
    res.sendStatus(200)
});

router.post("/", (req, res) => {
    chirpsStore.CreateChirp(req.body)
    res.sendStatus(200)
})

router.put('/:id', (req, res) => {
    chirpStore.UpdateChirp(req.params.id, req.body);
    res.sendStatus(200);
})

router.delete('/:id', (req, res) => {
    console.log(req.params.id);
    chirpStore.DeleteChirp(req.params.id);
    res.sendStatus(200)

})
module.exports = router