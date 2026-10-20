import { database } from "./database.js";
import { libGsmClient, LibGsmSms } from "./libGSM.js";
import { libSmtpClient, LibSmtpEmail } from "./libSMTP.js";
import { OTPGenerator } from "./OTPGenerator.js";

const smscNumber = "+33 6 89 00 40 00"

export function sendOTP(accountId) {
    const otp = OTPGenerator();

    const account = database.fetchAccount(accountId);
    if (account.preferSMS) {
        let smsContent = "Bonjour,\n";
        smsContent += `Pour vous connecter sur le portail entrez le code : ${otp}\n`;
        smsContent += "Si vous n'êtes pas à l'origine de cette demande, contactez le support."
        libGsmClient.sendSMS(smsContent, account.phoneNumber);
    } else {
        let email = "<p>Bonjour,</p>";
        email += `<p>Pour vous connecter sur le portail entrez le code : ${otp}</p>`;
        email += "<p>Si vous n'êtes pas à l'origine de cette demande, contactez le support.</p>"
        libSmtpClient.sendEmail(email, account.email)
    }
}