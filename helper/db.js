const mongoose = require('mongoose');

module.exports =()=>{
    mongoose.connect('mongodb+srv://ozancicek:Yumurta.1234@cluster0.xrtlp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')

    mongoose.connection.on('open', ()=>{
        console.log("Mongoose Connected")
    })

    mongoose.connection.on('error', (err)=>{
        console.log("Mongoose Connected ",err)
    })
}