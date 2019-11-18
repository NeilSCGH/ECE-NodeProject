express = require('express')
app = express()

app.set('port', 1337)

app.listen(
    app.get('port'),
    () => console.log(`Server listening on ${app.get('port')}`)
)

app.get(
    '/:path/:name',
    (req, res) => {
        console.log(`Hello ${req.params.path} ${req.params.name}`),
        res.send("Hello " + req.params.path + " " + req.params.name)
    }
)

app.post('/', (req, res) => {
    // POST
})

app.put('/', function (req, res) {
    // PUT
})

app.delete('/', (req, res) => {
    // DELETE
})