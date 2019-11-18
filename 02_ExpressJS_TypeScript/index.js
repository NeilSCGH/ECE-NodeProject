express = require('express')
app = express()

app.set('port', 1337)

app.listen(
  app.get('port'),
  () => console.log(`Server listening on ${app.get('port')}`)
)