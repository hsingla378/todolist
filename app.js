const express = require("express")
const bodyParser = require("body-parser")
const date = require(__dirname + "/date.js")

const app = express()
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"))
app.set('view engine', "ejs")
var item = ""
var items = ["Buy Food", "Cook Food", "Eat Food"]
let workItems = []

const PORT = 3000

app.get("/", (req, res)=>{
    let day = date.getDate();
    res.render("list", {listTitle: day, newListItems: items})
})

app.post("/", (req, res)=>{
    item = req.body.newItem
    console.log(req.body)

    if(req.body.list = "Work"){
        workItems.push(item)
        res.redirect("/work")
    }
    else{
        items.push(item)
        res.redirect("/")
    }

    // res.render("list", {newListItem: item})
})

app.listen(PORT, ()=>{
    console.log(`Server is started at port ${PORT}`)
    // console.log(newListItem)
})

app.get("/work", (req, res) =>{
    res.render("list", {listTitle: "Work List", newListItems: workItems})
})

app.get("/about", function(req,res) {
    res.render("about")
})

// app.post("/work", (req, res) => {
//     let item = req.body.newItem
//     workItems.push(item)
//     res.redirect("/work")
// })