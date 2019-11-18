express = require('express')
app = express()

app.set('port', 1389)

app.listen(
    app.get('port'),
    () => console.log(`Server listening on ${app.get('port')}`)
)

app.get(
    '/hello/:name',
    (req, res) => res.send("Hello " + req.params.name)
)

app.post('/', (req, res) => {
    // POST
})

app.put('/', function (req, res) {
        // PUT
    })

app    .delete('/', (req, res) => {
        // DELETE
    })