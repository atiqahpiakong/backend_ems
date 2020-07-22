
const functions = require('firebase-functions')
const express = require("express")
const app = express();
const leaveRouter = require('./api/controllers/leave_controller')
const taskRouter = require('./api/controllers/task_controller')
const userRouter = require('./api/controllers/user_controller')

app.use(express.json())
app.use('/leave', leaveRouter)
app.use('/user', userRouter)
app.use('/task', taskRouter)

exports.api = functions.https.onRequest(app)

// To handle "Function Timeout" exception
exports.functionsTimeOut = functions.runWith({
    timeoutSeconds: 300
})

exports.setupdb = functions.https.onRequest(require('./setup_database'))