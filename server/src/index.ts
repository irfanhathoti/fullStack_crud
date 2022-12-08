import { AppDataSource } from "./data-source"
import * as express from 'express'
import * as cors from 'cors'
import * as bodyparser from 'body-parser'
import employeeRouter from './router/employeeRouter'
import { createConnection } from "typeorm"





createConnection(AppDataSource.options).then(async () => {
    const app = express()

    app.use(bodyparser.json())

    app.use(cors())

    app.use('/',employeeRouter,(req,res)=>{
        res.send("Sending the Response to client")
    })


    app.listen(8000,()=>{
        console.log("Server Started........")
    })
}).catch(error => console.log(error))
