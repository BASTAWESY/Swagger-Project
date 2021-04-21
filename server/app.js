import express from 'express'
import path from 'path'
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import indexRouter from './routes/index'
import routes from './routes/api'
import swaggerUi from 'swagger-ui-express'
import swaggerOptions from './swagger'
import swaggerJsDoc from 'swagger-jsdoc'

const app = express()
const swaggerDocs = swaggerJsDoc(swaggerOptions);//confuguration of swagger DOCS 
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use(logger('dev'));
app.use(express.json());//response and accept json body
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));//to serve static content
app.use('/', indexRouter);//base link
app.use('/api', routes);//routes

export default app