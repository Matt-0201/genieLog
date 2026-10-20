import { database } from "./database.js";
import { libGsmClient, LibGsmSms } from "./libGSM.js";
import { libSmtpClient, LibSmtpEmail } from "./libSMTP.js";
import { OTPGenerator } from "./OTPGenerator.js";
import "./sender.js";

const smscNumber = "+33 6 89 00 40 00"

function generateText(otp) {
    let text = "Bonjour,\n";
    text += `Pour vous connecter sur le portail entrez le code : ${otp}\n`;
    text += "Si vous n'êtes pas à l'origine de cette demande, contactez le support."
    return text    
}

export function sendOTP(accountId) {
    const otp = OTPGenerator();
    const account = database.fetchAccount(accountId);
    if (account.preferSMS) {    
        sendSMS(generateText(otp), account.phoneNumber);
    } else {
        sendEmail(generateText(otp), account.email)
    }
}