// TODO: Insert trace
const app = require('./app')
const { connect: mongodbConnect, getDb } = require('./db')
const port = "3000"


mongodbConnect({}, function(err){
    if(err){
        console.log(err)
        return
    }
    app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`)
    })
})
