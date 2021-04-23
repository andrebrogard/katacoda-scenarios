var express = require('express')

const { v4: uuidv4 } = require('uuid');
const { getDb } = require('../db');
const fallbackTable = "MVPCDKStack-TodoF45EDE0F-BB0AIXQJVB9T"
var router = express.Router()

router.use(express.json())

// Get all todos
function getHandler(req, res) {
    const db = getDb()
    if(db){
        db.collection('todos').find({}).toArray(function(err, docs) {
            if(err) {
                console.log(err)
                res.status(400).end()
                return
            }
            console.log("GET all")
            res.json({items: docs})
        })
    } else {
        res.status(500).end()
    }
    
}

// Post a todo, generate id
function postHandler(req, res) {
    const uid = uuidv4()
    const {text} = req.body
    if(!text){
        res.status(400).end()
        return 
    }
    const db = getDb()
    if(db){
        db.collection('todos').insertOne({text, id: uid}, function(err, result) {
            if(err) {
                console.log(err)
                res.status(400).end()
                return
            }
            console.log("POST", uid)
            res.json({id: uid, text})
        })
    } else {
        res.status(500).end()
    }
}

// Delete a todo, by id
function deleteHandler(req, res){
    const {id} = req.body
    const db = getDb()
    if(db){
        db.collection('todos').deleteOne({id}, function(err, result) {
            if(err) {
                console.log(err)
                res.status(400).end()
                return
            }
            console.log("DELETE", id)
            res.status(204).end()
        })
    } else {
        res.status(500).end()
    }
}

router.get('/', getHandler)

router.post('/', postHandler)

router.delete('/', deleteHandler)

module.exports = router