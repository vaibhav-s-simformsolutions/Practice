import * as nodemailer from 'nodemailer'
// const nodemailer = require("nodemailer");


async function main() {

    // let testAccount = await nodemailer.createTestAccount();
    // console.log(testAccount.user);
    // console.log(testAccount.pass);

//   host config
  // let transporter = nodemailer.createTransport({
  //   host:'gmail',
  //   auth:{
  //       user:'',//email
  //       pass:'',
  //   }
  // });
  // let transporter = nodemailer.createTransport({
  //   host: "smtp.ethereal.email",
  //   port: 587,
  //   secure: false,
  //   auth: {
  //     user: testAccount.user,
  //     pass: testAccount.pass,
  //   },
  // });

  let transporter = nodemailer.createTransport({
    host: "smtp-relay.sendinblue.com",
    port: 587,
    secure: false,//465
    auth: {
      user: "vbs1765@gmail.com",
      pass: "vHN3TjKsJXgPWczb", 
    },
  });

  
  let info = await transporter.sendMail({
    from: '"Vaibhav " <vssci007@gmail.com>', 
    to: "krishnapatl64@gmail.com", 
    subject: "Testing ...",
    text: "Good Morning",
    html: "<b>Good Morning</b>",
  });

  console.log("Message sent: %s", info.messageId);

  // Preview only available when sending through an Ethereal account
//   console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  
}

main().catch(console.error);
// console.log(process.env.EMAIL)



