const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.set('view-engine', 'ejs');
app.use(bodyParser.urlencoded({ 
    extended:true
})); 
app.set('views', __dirname + '/views');
app.use(express.static('public'));


app.get('/', (req, res) => {
    res.render("index.ejs");
});

/* email handler */
app.post('/', (req, res) => {
    let name = req.body.name;
    let email = req.body.email;
    let message = req.body.message;

    var transporter = nodemailer.createTransport({
        service: 'outlook',
        auth: {
            user: 'emirak3456@gmail.com',
            pass: 'Agg123456'
        }
    });
      
    var mailOptions = {
        from: 'emirak3456@gmail.com',
        to: 'akbarovemir3@gmail.com',
        subject: 'Personal Website Email from ' + name,
        text: message + " the email was: " + email
    };
    
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
});

app.listen( 3000);