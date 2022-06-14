const express = require('express');
const app = express()
const studentRoutes = require('./Routes/studentRoutes');
const projectRoutes = require('./Routes/projectRoutes');
const teacherRoutes = require('./Routes/teacherRoutes');
const adminRoutes = require('./Routes/adminRoutes');

const cors = require('cors')
const PORT = process.env.PORT || 5000

//{credentials: true,origin:true} this part is to set cookies in the browser
// if u remove these options from cors then cookies wont be saved in the browser.
// and in axios set' withCredentials : true ' see login page part of teachers

app.use(cors({credentials: true,origin:true}))
app.use(express.json())
app.use(express.urlencoded({extended:true}))


// students and teachers routes
app.use('/student', studentRoutes)
app.use('/projects', projectRoutes)
app.use('/teacher', teacherRoutes)
app.use('/admin', adminRoutes)


// documents routes
// app.use('/profile-pic', express.static('./public/Profile'))
// app.use('/view-ppt', express.static('./public/ppt'))
// app.use('/view-report', express.static('./public/report'))
// app.use('/view-litReview', express.static('./public/literatureReview'))



// starting the server
app.listen(PORT, (err) => {
    if(err) {
        // console("error while starting the server");
    } else {
        // console("server started at port " + PORT);
    }
})