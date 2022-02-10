import express from 'express'
import cors from 'cors'
import mongoose  from 'mongoose'
import Messages from './models/dbMessages.js'
// import Users from './models/dbUsers.js'
import Pusher from 'pusher'

const app = express ()
app.use(express.json())
app.use (cors())


const port = process.env.PORT || 8000

const pusher = new Pusher({
    appId: "1345393",
    key: "d8f543d07886984bc191",
    secret: "64b5b61ee9f68751bfa4",
    cluster: "sa1",
    useTLS: true
  });



mongoose.connect( "mongodb+srv://new_user13:senha@cluster0.0f6a5.mongodb.net/chatback?retryWrites=true&w=majority")

const db = mongoose.connection

db.once('open', ()=> {
    console.log('DB connected' )

    const msgCollection = db.collection('messagecontents')
    const changeStream = msgCollection.watch()
    
    const userCollection = db.collection('userslogins')
    const changeStreamUser= userCollection.watch()


    changeStream.on('change',(change) => {
        console.log("A change occured", change)

        if (change.operationType === 'insert') {
            const messageDetails = change.fullDocument
            pusher.trigger('messages', 'inserted', {
                name: messageDetails.name,
                message:messageDetails.message,
                timestamp: messageDetails.timestamp,
                received: messageDetails.received
            })
        } else {
            console.log('Error triggering Pusher')
        }
    })

    changeStreamUser.on('change',(change) => {
        console.log("A change occured", change)

        if (change.operationType === 'insert') {
            const usersDetails = change.fullDocument
            pusher.trigger('users', 'inserted', {
                name: usersDetails.name,
                email: usersDetails.email,
                birthData: usersDetails.received
            })
        } else {
            console.log('Error triggering Pusher')
        }
    })
})


app.get('/', (req,res) => res.status(200).send ("Hello World"))

app.get('/messages/sync', (req,res) => {
    Messages.find((err,data) => {
        if(err) {
            res.status(500).send(err)
        }else{
            res.status(200).send(data)
        }
    })
})

app.post('/messages/new', (req,res) => {
    const dbMessage = req.body

    Messages.create(dbMessage, (err, data) => {
        if (err) {
            res.status(500).send(err)
        }else {
            res.status(201).send(data)
        }
    })
})

app.listen(port, ()=> console.log (`Server is Running on port ${port}`))