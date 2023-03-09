const express = require('express')
const axios = require('axios');
const app = express()

const PORT = 8085

app.use(express.urlencoded({ extended: false}))
app.use(express.json())

const numeros = []

app.post('/ingreso', (req, res) => {
    numeros.push(req.body.number)

    res.send('Guardado')
})

app.get('/egreso', (req, res) => {
    res.json({ numeros })
})

const sendNumber = async () => {
    const res = await axios.post('http://localhost:8085/ingreso', {
        number: Math.random() * 1000
    })

    console.log(res.data)
}

const getNumbers = async () => {
    const res = await axios.get('http://localhost:8085/egreso')

    console.log(res.data)
}

setInterval(() => sendNumber(), 2000)
setInterval(() => getNumbers(), 10000)



app.listen(PORT, () => {
console.log(`Example app listening in http://localhost:${PORT}`)
})

