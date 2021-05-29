const express = require('express');
const ejs = require('ejs');
const app = express();


app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));


app.get('/', function(req, res){
  res.render('index');
})



//Post route from contact from
/*
app.post('/sendmail', (req,res) => {

    // Transport service s sud by nodemailer to send mails 
        here, gmail is our transport service

        const smtpTrans = nodemailer.createTransport({
          host: 'smtp.gmail.com',
          service: 'gmail',
          port: 465,
          secure: true,
          auth: {
            type: 'OAuth2',
            user:'rabiumohammad9@gmail.com',
            pass: 'Mohammad1996##',
            clientID: '667218839195-sebn7ukafuamcahhu9qnl8ig6vopk0bd.apps.googleusercontent.com',
            clientSecret: 'IJyKJSgbK2YDt2ONvOA2LFi9',
            refreshToken: '1//04JDk2V-8kUqRCgYIARAAGAQSNwF-L9Irypez2gwV7Q48iCV7syHsuHT9L0i7WhTA2JqxgqkLFT7Abcgq9FKETTIG4xIiWgGCpug',
            accessToken: 'ya29.a0AfH6SMA7OZvHGKlSK0a0O3mh5pnkgE8OOWGOAc7uKSIjNA-TO0EJXRX2POxtjyZM-KaaLvasizST9Oh0qCCqF2guyxjyfOqCux8nGqxI4DDoTRuH-tXLVAPyitLbR2sLoBqKWTLu2cQ1UHly4bP4y-W54TUN'
          },
          tls: {
            rejectUnauthorized: false
          }
        })

        const mailOpts = {
          from: req.body.name + ' &lt;' + req.body.email + '&gt;',
          to: GMAIL_USER,
          subject: `Message from contact form on ${req.body.formlocation}`,
          text: `${req.body.name} (${req.body.email}) says: ${req.body.message}`
        }
      
        if (req.body && req.body.verification && req.body.verification === 'send') {
          smtpTrans.sendMail(mailOpts, (error) => {
            if (error) {
              console.log('Failed contact form attempt: ')
              console.log(mailOpts)
              throw error;
              res.render('contact-failure')
            }
              res.render('contact-success');
          })
        } else {
          res.render('contact-failure')
        }
})*/


//server port
app.listen(process.env.PORT || 4400, () => {
  console.log('Express server started successfully on port: 4400');
})