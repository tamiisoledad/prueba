const http = require("http");
const axios = require('axios');

const PORT = 8085

const hora = async () => {
    try {
        console.log('entre')
        const response = await axios.get('http://localhost:8085/')

        console.log(response.data)
    } catch (error) {
        console.log(error)
    }
}

const server = http.createServer((req, res) => {
  res.write(JSON.stringify({ hora: new Date()}))
  res.end()
});

/* axios.get('/hora').then((res) => {
    console.log(res)
}).catch(err => console.log(err)) */


server.listen(PORT, () => {
  console.log("http://localhost:8080");
});

hora()