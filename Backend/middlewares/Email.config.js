import nodemailer from 'nodemailer'


export const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for port 465, false for other ports
    auth: {
      user: "sachinverma13713@gmail.com",
      pass: "vuiy puun ezkm fuha",
    },
    tls: {
        rejectUnauthorized: false, // Set to false for testing, but only in secure setups
      },
  });

//   const SendEmail=async()=>{
//     try {
//         const info = await transporter.sendMail({
//             from: '"Reraj 👻" <sachinverma13713@gmail.com>', // sender address
//             to: "sachinmehroliya13713@gmail.com", // list of receivers
//             subject: "Hello ✔", // Subject line
//             text: "Hello world?", // plain text body
//             html: "<b>Hello world?</b>", // html body
//           });
//         console.log(info);
        
//     } catch (error) {
//         console.log(error);
        
//     }
//   }

//   SendEmail()