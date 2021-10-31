const express = require('express');
const sgMail = require('@sendgrid/mail');
const app = express();
const cors = require('cors');

sgMail.setApiKey("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");

app.use(cors);
app.use(express.json());

//send the mail

app.get('/sendmail', (req, res) => {
    const{
        Username,
        email,
        subject,
        Message
    } = req.body;
    const mail= {
        to:email,
        from:"xyz@gmail.com",
        subject:subject,
        text:Message

    }
    sgMail.send(mail, (err, result) => {
        if(err){
            console.log(err);
            res.status(500).send(err);
        }
        else{
            console.log(result);
            res.status(200).send(result);
        }
    })
    
});



app.listen(5000, () => {
  console.log('Example app listening on port 5000!');
});