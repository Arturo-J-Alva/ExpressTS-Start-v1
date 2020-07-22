require('dotenv').config({ path: 'variables.env' })

import app from './app'

const port = process.env.PORT || 3777;

app.listen(port, function () {
  console.log(`Server running on http://localhost:${port}/`);
});