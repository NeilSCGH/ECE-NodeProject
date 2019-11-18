express = require('express')
app = express()

app.set('port', 1389)

app.listen(
  app.get('port'),
  () => console.log(`Server listening on ${app.get('port')}`)
)