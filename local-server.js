
const express = require('express')
const app = express()
const port = 4000


app.get('/', async (req, res) => {
  res.set('Content-Type', 'text/html');
  await res.sendFile('/_MORTEGA_/_CODE/reCaptchav3/test.html');
});

app.get('/valida-token/:id', async (req, res) => {
  return res.status(422).json({ errors: 'ninguno'})

});



// const getValidateToken = async (token) => {
//   try {
//     return await axios.get('https://dog.ceo/api/breeds/list/all')
//   } catch (error) {
//     console.error(error)
//   }
// }



app.listen(port, () => console.log(`Local Server listening on port ${port}!`))
