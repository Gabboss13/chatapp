// import Messages from ('../models/dbMessages')

// export default () => {
//     app.get('/', (req,res) => res.status(200).send ("Hello World"))

// app.get('/messages/sync', (req,res) => {
//     Messages.find((err,data) => {
//         if(err) {
//             res.status(500).send(err)
//         }else{
//             res.status(200).send(data)
//         }
//     })
// })

// app.post('/messages/new', (req,res) => {
//     const dbMessage = req.body

//     Messages.create(dbMessage, (err, data) => {
//         if (err) {
//             res.status(500).send(err)
//         }else {
//             res.status(201).send(data)
//         }
//     })
// })

// }