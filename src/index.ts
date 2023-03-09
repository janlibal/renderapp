import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv'


dotenv.config()

const app: Express = express()

app.get('/', (req: Request, res: Response) => {
  res.send('New Express + TypeScript Server running on port 100000?. This is like that.')
})

const port = process.env.PORT || 3001

app.listen(port, () => {
  console.log(`Server started on port: ${port}.`)
  console.log('Project has been updated to TypeScript!!!')
  console.log('Built and launched with npm run prod')
  console.log('Dist folder added into .gitignore')
  console.log('Modified package json file')

})