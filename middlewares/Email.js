import { Verification_Email_Template, Welcome_Email_Template } from "../config/EmailTemplate.js";
import { transporter } from "./Email.config.js";


export const SendVerificationCode = async(email,verificationCode)=>{
    try {
        const response = await transporter.sendMail({
            from: '"Reraj 👻" <sachinverma13713@gmail.com>', // sender address
            to: email, // list of receivers
            subject: "Verify your Email", // Subject line
            text: "Verify your Email", // plain text body
            html: Verification_Email_Template.replace("{verificationCode}",verificationCode), // html body
          });
          console.log('Email sent successfully',response);
    } catch (error) {
        console.log('Email error');
        
    }
}


export const WelcomeEmail = async(email,name)=>{
    try {
        const response = await transporter.sendMail({
            from: '"Reraj 👻" <sachinverma13713@gmail.com>', // sender address
            to: email, // list of receivers
            subject: "Welcome Email", // Subject line
            text: "Welcome Email", // plain text body
            html: Welcome_Email_Template.replace("{name}",name), // html body
          });
          console.log('Email sent successfully',response);
    } catch (error) {
        console.log('Email error');
        
    }
}

