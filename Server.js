const express = require('express')

const app = express()

const port = 5000


const checkHour=(req, res ,next)=>{

    var currentDate = new Date()
    var currentHour = currentDate.getHours()
    var currentDay = currentDate.getDay()

    if (currentHour < 9 || currentHour >= 17 || currentDay == 6 || currentDay == 0) {
        return res.sendFile(__dirname+ '/public/Closed.html')
    } 
    
    next()
}

app.use(checkHour)

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/public/Homepage.html')
})

app.get('/Services', (req, res)=>{
    res.sendFile(__dirname + '/public/OurServices.html')
})

app.get('/Contact', (req, res)=>{
    res.sendFile(__dirname + '/public/Contactus.html')
})

app.listen(port, console.log(`Server is running on the port ${port}`))