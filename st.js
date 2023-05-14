const screenshot = require('screenshot-desktop')
const moment = require('moment');
var nodemailer = require('nodemailer');
const fs = require('fs');

const files = [];

async function init() {
  let count = 0;
  console.log(1);
  while(count < 2){
    let filename = `shot${moment().unix()}${count}.jpg`;
    files.push(filename);
    screenshot({ filename:  filename}).then((img) => {
      // img: Buffer filled with jpg goodness
      // ...
    }).catch((err) => {
      // ...
    })
    await sleep(3000);

    count++;
  }

  console.log(2);
}

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}


async function mail() {
  await init();
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'yvtest0114@gmail.com',
      pass: 'puaqjgxcexknjoje'
    }
  });
  let attachments = [];
  files.forEach(file => {
      attachments.push({   // binary buffer as an attachment
          filename: file,
          content: fs.createReadStream(file)
      },
      {   // binary buffer as an attachment
        // filename: file,
        path: './' + file
    });
  });

  var mailOptions = {
    from: 'yvtest0114@gmail.com',
    to: '1234yatharth@gmail.com',
    subject: 'Sending Email via Node.js',
    text: 'That was easy!',
    attachments: attachments
  };
   
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}

mail();



